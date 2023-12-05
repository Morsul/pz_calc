import { WeaponList } from "./contsts"

interface IWeaponTypes {
  name: WeaponList
  aspd: number
}

interface ICharWeapons{ // TODO string -> WeaponList
  right: string
  left: null | string
}

interface IAspdInfo{
  value: number
  gearAspdBonus:{
    flatAspd: number,
    aspdBonus: number,
    potionBonus: number
  }
  buffAspdBonus:{
    aspdBonus: number
  }
}

export interface IBaseStats {
  STR: number
  AGI: number
  VIT: number
  INT: number
  DEX: number
  LUK: number
}

export interface IStatValue{
  name: keyof IBaseStats
  amount: number
}

export interface ILevelStats extends IBaseStats {
  MaxStats: number
}

export interface IStatFields {
  key: string
  statName: keyof IBaseStats
  currentVal: number
}

export interface IClassDescription {
  name: string
  type: string
  jobStatBonus: IBaseStats
  weaponsASPDMod: IWeaponTypes[]
  usableAspdPotions: [boolean, boolean, boolean]
}

export interface IClassFields {
  key: string
  classDescription: IClassDescription
}

export interface IStatCap {
  classic: number
  transcendent: number
}

export interface IBaseInfo{
  baseStats: IBaseStats
  jobStats: IBaseStats
  maxStats: number
  statPointsCap: number
  statPointsLeft: number
  levelCap: number
  classId: number
  weapons: ICharWeapons
  aspd: IAspdInfo
}