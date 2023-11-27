import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IStatCap, type ILevelStats, type IBaseStats, IStatValue } from '../defaults/types'
import { ClassInfo } from '../defaults/classInfo'
import { leveCap, statCap } from '../defaults/contsts'

const initialState = {
  stats: {
    baseStats: {
      STR: 1,
      AGI: 1,
      VIT: 1,
      INT: 1,
      DEX: 1,
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
    classId: 0,
    weapons: {
      right: 'dagger',
      left: null
    },
    aspd: 0,
    gear:{
      flatAspd: 0,
      aspdBonus: 0.1
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
      
      ClassInfo[classId].weaponsASPDMod.find(e=> e.name === stats.weapons.right);
      Math.sqrt(Math.pow(stats.baseStats.AGI+stats.jobStats.AGI,2)/2 + Math.pow(stats.baseStats.DEX+stats.jobStats.DEX,2))/4
      // stats.aspd = updateAspd({})
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

const updateAspd = ({}):number =>{
  let a = 0
  return a
}