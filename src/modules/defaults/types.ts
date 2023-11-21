export interface IBaseStats {
  STR: number
  AGI: number
  VIT: number
  INT: number
  DEX: number
  LUK: number
}

type WeaponList = 'Bare Hands'|'Book'|'Bow'|'Dagger'|'Huuma Shuriken'|'Instrument'|'Katar'|'Knuckle'|'Mace'|'One Handed Sword'|'One Handed Spear'|'One Handed Axe'|'Two handed Sword'|'Two handed Spear'|'Two Handed Axe'|'One Handed Rod'|'Two Handed Rod'|'Whip'|'Shield'|'L.Dagger'|'L.Sword'|'L.Axe'

interface WeaponTypes
  {
    name: WeaponList
    aspd: number
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
  weaponsASPDMod: WeaponTypes[]
}

export interface IClassFields {
  key: string
  classDescription: IClassDescription
}

export interface IStatCap {
  classic: number
  transcendent: number
}
