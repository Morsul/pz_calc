export interface IBaseStats {
  STR: number
  AGI: number
  VIT: number
  INT: number
  DEX: number
  LUK: number
}
export interface ILevelStats extends IBaseStats {
  MaxStats: number
}

export interface IStatFields {
  key: string
  statName: keyof IBaseStats
}

export interface IClassDescription {
  name: string
  type: string
}

export interface IClassFields {
  key: string
  classDescription: IClassDescription
}

export interface IStatCap {
  classic: number
  transcendent: number
}
