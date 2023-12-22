import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IStatCap, type ILevelStats, type IBaseStats, type IStatValue, type IBaseInfo, type ISumPStats, type IWeaponTypes, type ICharWeapons } from './defaults/types'
import { ClassInfo } from './defaults/classInfo'
import { defaultPStats, leveCap, statCap } from './defaults/contsts'
import { aspdPotion } from './defaults/consumables'

const initialState = {
  stats: {
    baseStats: {
      STR: 1,
      AGI: 88,
      VIT: 1,
      INT: 1,
      DEX: 54,
      LUK: 1
    },
    jobStats: {
      STR: 0,
      AGI: 0,
      VIT: 0,
      INT: 0,
      DEX: 0,
      LUK: 0
    },
    skillBuffStats: {
      STR: 0,
      AGI: 0,
      VIT: 0,
      INT: 0,
      DEX: 0,
      LUK: 0,
      crit: 0,
      hit: 0,
      flee: 0,
      baseAspd: 0,
      pctAspd: 0
    },
    sumStats: {
      crit: defaultPStats.crit,
      hit: defaultPStats.hit,
      flee: defaultPStats.flee,
      baseAspd: 0,
      pctAspd: 0
    },
    maxStats: 0,
    statPointsCap: 0,
    statPointsLeft: 0,
    levelCap: 0,
    classId: 24,
    weapons: {
      right: 'Bare Hands',
      left: null
    },
    aspd: {
      value: 0,
      gearAspdBonus: {
        flatAspd: 0,
        aspdBonus: 0
      }
    },
    consumables: {
      aspdPotion: 0
    },
    skillsUsedOnChar: null
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<keyof IBaseStats>): void => {
      const value = state.stats.baseStats[action.payload] + 1
      const maxStats = state.stats.maxStats
      state.stats.baseStats[action.payload] = value > maxStats ? maxStats : value
      state.stats.statPointsLeft = updateStatPointLeft(state.stats.statPointsCap, state.stats.baseStats)
      // state.stats.aspd = updateAspd()
    },
    decrement: (state, action: PayloadAction<keyof IBaseStats>): void => {
      const value = state.stats.baseStats[action.payload] - 1
      state.stats.baseStats[action.payload] = value < 1 ? 1 : value
      state.stats.statPointsLeft = updateStatPointLeft(state.stats.statPointsCap, state.stats.baseStats)
      // state.stats.aspd = updateAspd()
    },
    setValue: (state, action: PayloadAction<IStatValue>): void => {
      const stats = state.stats
      const amount = action.payload.amount
      let newValue = 0
      if (amount <= 0) {
        newValue = 1
      } else if (amount > stats.maxStats) {
        newValue = stats.maxStats
      } else {
        newValue = amount
      }

      stats.baseStats[action.payload.name] = newValue

      stats.statPointsLeft = updateStatPointLeft(state.stats.statPointsCap, state.stats.baseStats)
      stats.aspd.value = updateAspd(state.stats)
      stats.sumStats.crit = updateCrit(state.stats)
      stats.sumStats.flee = updateFlee(state.stats)
      stats.sumStats.hit = updateHit(state.stats)
      console.log(stats.aspd.value)
    },
    changeAspdPotion: (state, action: PayloadAction<number>): void => {
      state.stats.consumables.aspdPotion = action.payload
      state.stats.aspd.value = updateAspd(state.stats)
    },
    changeClass: (state, action: PayloadAction<number>): void => {
      const classId = action.payload
      const stats = state.stats
      stats.classId = classId
      stats.maxStats = statCap[ClassInfo[classId].type as keyof IStatCap] // TODO remove as "as keyof IStatCap"?
      stats.levelCap = leveCap[ClassInfo[classId].type as keyof IStatCap] // TODO remove as "as keyof IStatCap"?
      const s = setStatPointCap(stats.levelCap)
      stats.statPointsCap = s
      stats.statPointsLeft = updateStatPointLeft(s, stats.baseStats)
      stats.consumables.aspdPotion = 0
      stats.skillsUsedOnChar = null // TODO should add all avalaible skills

      stats.jobStats = ClassInfo[classId].jobStatBonus

      stats.aspd.value = updateAspd(state.stats)
      stats.sumStats.crit = updateCrit(state.stats)
      stats.sumStats.flee = updateFlee(state.stats)
      stats.sumStats.hit = updateHit(state.stats)
    },
    changeWeapon: (state, action: PayloadAction<[keyof ICharWeapons, string]>): void => {
      const stats: IBaseInfo = state.stats
      console.log(stats.weapons[action.payload[0]])
      stats.weapons[action.payload[0]] = action.payload[1]
      state.stats.aspd.value = updateAspd(state.stats)
      console.log(stats.weapons[action.payload[0]], state.stats.aspd.value)
    }

  }

})

export const selectStats = (state: any): ILevelStats => state.counter.stats.baseStats // TODO remove any
export const getMaxStat = (state: any): number => state.counter.stats.maxStats// TODO remove any
export const getPointsLeft = (state: any): number => state.counter.stats.statPointsLeft // TODO remove any
export const getJobStats = (state: any): ILevelStats => state.counter.stats.jobStats // TODO remove any
export const getJobID = (state: any): number => state.counter.stats.classId // TODO remove any
export const getFinalStats = (state: any): [ISumPStats, number] => [state.counter.stats.sumStats, state.counter.stats.aspd.value] // TODO remove any
export const { increment, decrement, changeClass, setValue, changeAspdPotion, changeWeapon } = counterSlice.actions
export default counterSlice.reducer

const setStatPointCap = (level: number): number => {
  let cap: number = 0
  for (let i = 1; i < 99; i++) {
    cap += Math.floor(i / 5) + 3
  }

  if (level > 99) {
    for (let i = 99; i < level; i++) {
      cap += Math.floor(i / 10) + 13
    }
    cap += 100
  } else {
    cap += 48
  }

  return cap
}

const updateStatPointLeft = (cap: number, bstats: IBaseStats): number => {
  let count = 0
  Object.values(bstats).forEach(e => {
    for (let i = 1; i < e; i++) {
      count += (Math.floor((i - 1) / 10) + 2)
    }
  })
  return (cap - count)
}

const updateAspd = (stats: IBaseInfo): number => {
  const lhAspd = getWeaponPenalty(stats.weapons.left, ClassInfo[stats.classId].weaponsASPDMod.left)
  const rhAspd = getWeaponPenalty(stats.weapons.right, ClassInfo[stats.classId].weaponsASPDMod.right)
  const wbPenalty = ClassInfo[stats.classId].weaponsASPDMod.right[0].aspd + lhAspd + rhAspd
  const statBonus = Math.sqrt(Math.pow(stats.baseStats.DEX + stats.jobStats.DEX, 2) / 5 + Math.pow(stats.baseStats.AGI + stats.jobStats.AGI, 2) / 2) / 4 // TODO add ranged and mele weapons diff formulas
  const aspOtherBonus = (stats.skillBuffStats.pctAspd + aspdPotion[stats.consumables.aspdPotion].bonus()) * (stats.baseStats.AGI + stats.jobStats.AGI) / 200

  const ASPD1 = Math.floor(wbPenalty + statBonus + aspOtherBonus)
  const ASPD2 = Math.floor((195 - ASPD1) * (stats.skillBuffStats.pctAspd)) + ASPD1

  return ASPD2
}

const getWeaponPenalty = (wName: string | null, weaponList: IWeaponTypes[]): number => {
  if (wName === 'Bare Hands') return 0
  return wName === null ? 0 : weaponList.find(e => e.name === wName)?.aspd ?? 0
}

// const getStatSumm = (arr: number[]): number =>{
//   return arr.reduce((acc , curVal) =>{return acc+ curVal}, 0)
// }

const updateHit = (stats: IBaseInfo): number => {
  let hit = defaultPStats.hit
  hit += stats.levelCap
  hit += stats.baseStats.DEX + stats.jobStats.DEX + stats.skillBuffStats.DEX
  hit += Math.floor((stats.baseStats.LUK + stats.jobStats.LUK + stats.skillBuffStats.LUK) / 3)
  hit += stats.skillBuffStats.hit
  return hit
}

const updateFlee = (stats: IBaseInfo): number => {
  let flee = defaultPStats.flee
  flee += stats.levelCap
  flee += stats.baseStats.AGI + stats.jobStats.AGI + stats.skillBuffStats.AGI
  flee += Math.floor((stats.baseStats.LUK + stats.jobStats.LUK + stats.skillBuffStats.LUK) / 5)
  flee += stats.skillBuffStats.flee
  return flee
}

const updateCrit = (stats: IBaseInfo): number => {
  let crit = defaultPStats.crit
  crit += Math.floor((stats.baseStats.LUK + stats.jobStats.LUK + stats.skillBuffStats.LUK) / 3)
  crit += stats.skillBuffStats.crit
  return crit
}
