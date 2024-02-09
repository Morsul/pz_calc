import { type WeaponList } from './contsts'

export interface IWeaponTypes {
  name: WeaponList
  aspd: number
}

export interface IWeaponSection {
  right: IWeaponTypes[]
  left: IWeaponTypes[]
}

export interface ICharWeapons { // TODO string -> WeaponList
  right: string
  left: null | string
}

interface IAspdInfo {
  value: number
  gearAspdBonus: {
    flatAspd: number
    aspdBonus: number
  }
}

export interface ISumPStats {
  crit: number
  hit: number
  flee: number
  baseAspd: number
  pctAspd: number
}

export interface IBaseStats {
  STR: number
  AGI: number
  VIT: number
  INT: number
  DEX: number
  LUK: number
}

export interface ISkillBuffStats extends IBaseStats, ISumPStats {
  weaponATK: number
  baseATKpct: number
  flatAtk: number
  maxSPpct: number
  flatMatk: number
}

interface IConsumables {
  aspdPotion: number
}

export interface IStatValue {
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
  weaponsASPDMod: IWeaponSection
  usableAspdPotions: [boolean, boolean, boolean, boolean]
  selfBuffList: number[] | undefined
}

export interface IClassFields {
  key: string
  classDescription: IClassDescription
}

export interface IStatCap {
  classic: number
  transcendent: number
}

export interface IBaseInfo {
  baseStats: IBaseStats
  jobStats: IBaseStats
  maxStats: number
  statPointsCap: number
  statPointsLeft: number
  levelCap: number
  classId: number
  weapons: ICharWeapons
  aspd: IAspdInfo
  consumables: IConsumables
  skillsUsedOnChar: Array<[number, number]> | null
  skillBuffStats: ISkillBuffStats
}

export interface ISelfBuffSkills {
  description: {
    id: number
    type: string
    name: string
    levels: [number, number]
  }
  getSkillStats: (a: IBaseStats, x: number) => ISkillBuffStats
}

export interface IAspdPotion {
  name: string
  bonus: () => number
}
