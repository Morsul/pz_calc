import { Interface } from "readline"
import { WeaponList } from "./contsts"

export interface IWeaponTypes {
  name: WeaponList
  aspd: number
}

export interface IWeaponSection{
  right: IWeaponTypes[],
  left: IWeaponTypes[]
}

export interface ICharWeapons{ // TODO string -> WeaponList
  right: string
  left: null | string
}

interface IAspdInfo{
  value: number
  gearAspdBonus:{
    flatAspd: number,
    aspdBonus: number
  }
}

interface ISkillBuffStats extends IBaseStats, ISumPStats{

}

export interface ISumPStats {
  crit: number
  hit: number
  flee: number
  baseAspd: number
  pctAspd: number
}

interface IConsumables{  
  aspdPotion: number
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
  weaponsASPDMod: IWeaponSection
  usableAspdPotions: [boolean, boolean, boolean, boolean]
  selfBuffList: number[] | null
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
  aspd: IAspdInfo,
  consumables: IConsumables,
  skillsUsedOnChar: Array<[number, number]> | null
  skillBuffStats: ISkillBuffStats
}

export interface ISafeBuffSkills{
  description:{
    id:number,
    type: string,
    name: string,
    levels: [number, number]
  }
  getStats:{
    hit?:(x: number, isProperWeapon?:boolean)=> number ,
    crit?:(x: number)=> number ,
    flee?:(x: number)=> number ,
    pctAspd?:(x: number)=> number ,
    baseAspd?:(x: number)=> number ,
    baseSTR?:(x: number, stat?:number)=> number ,
    baseAGI?:(x: number, stat?:number)=> number ,
    baseDEX?:(x: number, stat?:number)=> number ,
    baseINT?:(x: number, stat?:number)=> number ,
    baseVIT?:(x: number, stat?:number)=> number ,
    baseLUK?:(x: number, stat?:number)=> number ,
    weaponATK?:(x: number, isProperWeapon?:boolean)=> number ,
    baseATKpct?:(x: number)=> number ,
    baseMATKpct?:(x: number)=> number ,
    baseATK?:(x: number)=> number ,
    maxSPpct?:(x: number)=> number ,
  }
}