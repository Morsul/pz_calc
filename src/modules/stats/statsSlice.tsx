import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IStatCap, type ILevelStats, type IBaseStats, IStatValue, IBaseInfo } from '../defaults/types'
import { ClassInfo } from '../defaults/classInfo'
import { leveCap, statCap } from '../defaults/contsts'

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
    jobStats:{
      STR: 0,
      AGI: 0,
      VIT: 0,
      INT: 0,
      DEX: 0,
      LUK: 0
    },
    maxStats: 0,
    statPointsCap: 0,
    statPointsLeft: 0,
    levelCap: 0,
    classId: 24,
    weapons: {
      right: 'Two handed Sword',
      left: null
    },
    aspd: {
      value: 0,
      gearAspdBonus:{
        flatAspd: 1, 
        aspdBonus: 0.1, //
        potionBonus: 9
      },
      buffAspdBonus:{
        baseAspd: [0],
        pctAspd: [0]
      }
    }

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
    setValue: (state, action: PayloadAction<IStatValue>): void=>{
      const amount = action.payload.amount
      let newValue = 0;
      if(amount <= 0){
        newValue = 1
      } else if (amount > state.stats.maxStats){
        newValue = state.stats.maxStats
      } else {
        newValue = amount
      }

      state.stats.baseStats[action.payload.name] = newValue
      // state.stats.aspd = updateAspd()

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

      stats.jobStats = ClassInfo[classId].jobStatBonus
      
      stats.aspd.value = updateAspd(state.stats)
    },

  }

})

export const selectStats = (state: any): ILevelStats => state.counter.stats.baseStats // TODO remove any
export const getMaxStat = (state:any): number =>state.counter.stats.maxStats// TODO remove any
export const getPointsLeft = (state: any): number => state.counter.stats.statPointsLeft // TODO remove any
export const getJobStats = (state: any): ILevelStats => state.counter.stats.jobStats // TODO remove any
export const { increment, decrement, changeClass, setValue } = counterSlice.actions
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

const updateAspd = (stats: IBaseInfo):number =>{
  const lhAspd = getWeaponPenalty(stats.weapons.left, stats.classId)
  const rhAspd = getWeaponPenalty(stats.weapons.right, stats.classId)
  const wbPenalty = ClassInfo[stats.classId].weaponsASPDMod[0].aspd + lhAspd + rhAspd
  const statBonus = Math.sqrt(Math.pow(stats.baseStats.DEX+stats.jobStats.DEX,2)/5 + Math.pow(stats.baseStats.AGI+stats.jobStats.AGI,2)/2)/4 // TODO add ranged and mele weapons diff formulas 
  const aspOtherBonus = (getStatSumm(stats.aspd.buffAspdBonus.baseAspd) + stats.aspd.gearAspdBonus.potionBonus)* (stats.baseStats.AGI+stats.jobStats.AGI) / 200

  const ASPD1 = Math.floor(wbPenalty + statBonus + aspOtherBonus)
  const ASPD2 = Math.floor((195-ASPD1) * (getStatSumm(stats.aspd.buffAspdBonus.pctAspd))) + ASPD1
  
  console.log(ASPD1, stats.classId)
  let aspd1 = Math.floor(1)
  return aspd1
}

const getWeaponPenalty = (wName: string | null, classId: number) => {
  return wName === null ? 0 : ClassInfo[classId].weaponsASPDMod.find(e=>e.name === wName)?.aspd ?? 0
}

const getStatSumm = (arr: number[]): number =>{
  return arr.reduce((acc , curVal) =>{return acc+ curVal}, 0)
}