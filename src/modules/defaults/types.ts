import { WeaponList } from "./contsts"

interface IWeaponTypes {
  name: WeaponList
  aspd: number
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
