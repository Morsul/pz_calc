import { type ISkillBuffStats, type ISelfBuffSkills } from './types'

export const defaultSelfBuffStats: ISkillBuffStats = {
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
  pctAspd: 0,
  weaponATK: 0,
  baseATKpct: 0,
  flatAtk: 0,
  maxSPpct: 0,
  flatMatk: 0
}

export const SelfBuffSkillsList: ISelfBuffSkills[] = [
  {
    description: {
      id: 0,
      type: 'select',
      name: 'Two-hand Quicken',
      levels: [0, 10]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.hit = x * 2
      rStats.crit = x + 2
      rStats.pctAspd = 0.1
      rStats.baseAspd = 7
      return rStats
    }
  },
  {
    description: {
      id: 1,
      type: 'select',
      name: 'Improve Concentration',
      levels: [0, 10]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.AGI = a.AGI * (x + 2)
      rStats.DEX = a.DEX * (x + 2)
      return rStats
    }
  },
  {
    description: {
      id: 2,
      type: 'select',
      name: "Owl's Eye",
      levels: [0, 10]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.DEX = x
      return rStats
    }
  },
  {
    description: {
      id: 3,
      type: 'select',
      name: "Vulture's Eye",
      levels: [0, 10]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.hit = x
      return rStats
    }
  },
  {
    description: {
      id: 4,
      type: 'select',
      name: 'Sword Mastery',
      levels: [0, 10]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.weaponATK = x * 4
      return rStats
    }
  },
  {
    description: {
      id: 5,
      type: 'select',
      name: 'Two-Handed Sword Mastery',
      levels: [0, 10]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.weaponATK = x * 4
      return rStats
    }
  },
  {
    description: {
      id: 6,
      type: 'select',
      name: 'Double Attack',
      levels: [0, 10]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.hit = 4
      return rStats
    }
  },
  {
    description: {
      id: 7,
      type: 'select',
      name: 'Power Thrust',
      levels: [0, 5]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.baseATKpct = x * 5
      return rStats
    }
  },
  {
    description: {
      id: 8,
      type: 'checkbox',
      name: 'Hilt Binding',
      levels: [0, 1]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.STR = x
      rStats.flatAtk = 4
      return rStats
    }
  },
  {
    description: {
      id: 9,
      type: 'select',
      name: 'Musical Lesson',
      levels: [0, 10]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.weaponATK = x * 5 - (x > 5 ? 5 : x - 1)
      rStats.pctAspd = x < 6 ? x + 1 : x + 1 + (x - 6)
      rStats.maxSPpct = x < 6 ? x + 1 : x + 1 + (x - 6)
      return rStats
    }
  },
  {
    description: {
      id: 10,
      type: 'select',
      name: 'Dancing Lesson',
      levels: [0, 10]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.weaponATK = x * 5 - (x > 5 ? 5 : x - 1)
      rStats.crit = x < 6 ? x + 1 : x + 1 + (x - 6)
      rStats.maxSPpct = x < 6 ? x + 1 : x + 1 + (x - 6)
      return rStats
    }
  },
  {
    description: {
      id: 11,
      type: 'select',
      name: 'Advanced Book',
      levels: [0, 10]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.weaponATK = x * 4
      rStats.pctAspd = x / 2
      return rStats
    }
  },
  {
    description: {
      id: 12,
      type: 'select',
      name: 'Dragonology',
      levels: [0, 5]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.INT = a.INT * ((x * 3) / 100)
      rStats.pctAspd = x / 2
      rStats.flatMatk = x
      return rStats
    }
  },
  {
    description: {
      id: 13,
      type: 'select',
      name: 'Spear Quicken',
      levels: [0, 10]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.crit = x * 3
      rStats.flee = (x * 2) / 2
      rStats.baseAspd = 7
      rStats.pctAspd = 0.1
      return rStats
    }
  },
  {
    description: {
      id: 14,
      type: 'select',
      name: 'Plagiarism (Intimidate)',
      levels: [0, 10]
    },
    getSkillStats: (a, x) => {
      if (x === 0) { return defaultSelfBuffStats }
      const rStats = { ...defaultSelfBuffStats }
      rStats.pctAspd = x
      return rStats
    }
  }
]
