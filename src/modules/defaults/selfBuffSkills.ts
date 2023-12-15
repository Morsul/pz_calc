export const SelfBuffSkills = [
  {
    description: {
      id: 0,
      type: 'select',
      name: 'Two-hand Quicken',
      levels: [0, 10]
    },
    getStats: {
      hit: (x: number): number => x * 2,
      crit: (x: number): number => x > 0 ? x + 2 : 0,
      pctAspd: (x: number): number => x > 0 ? 0.1 : 0,
      baseAspd: (x: number): number => x > 0 ? 7 : 0
    }

  },
  {
    description: {
      id: 1,
      type: 'select',
      name: 'Improve Concentration',
      levels: [0, 10]
    },
    getStats: {
      baseAGI: (x: number, stat: number): number => x > 0 ? stat * (x + 2) : 0,
      baseDEX: (x: number, stat: number): number => x > 0 ? stat * (x + 2) : 0
    }
  },
  {
    description: {
      id: 2,
      type: 'select',
      name: "Owl's Eye",
      levels: [0, 10]
    },
    getStats: {
      baseDEX: (x: number): number => x
    }
  },
  {
    description: {
      id: 3,
      type: 'select',
      name: "Vulture's Eye",
      levels: [0, 10]
    },
    getStats: {
      hit: (x: number, isProperWeapon: boolean): number => isProperWeapon ? x : 0
    }
  },
  {
    description: {
      id: 4,
      type: 'select',
      name: 'Sword Mastery',
      levels: [0, 10]
    },
    getStats: {
      weaponATK: (x: number, isProperWeapon: boolean): number => isProperWeapon ? x * 4 : 0
    }
  },
  {
    description: {
      id: 5,
      type: 'select',
      name: 'Two-Handed Sword Mastery',
      levels: [0, 10]
    },
    getStats: {
      weaponATK: (x: number, isProperWeapon: boolean): number => isProperWeapon ? x * 4 : 0
    }
  },
  {
    description: {
      id: 6,
      type: 'select',
      name: 'Double Attack',
      levels: [0, 10]
    },
    getStats: {
      hit: (x: number): number => x
    }
  },
  {
    description: {
      id: 7,
      type: 'select',
      name: 'Power Thrust',
      levels: [0, 5]
    },
    getStats: {
      baseATKpct: (x: number): number => x * 5
    }
  },
  {
    description: {
      id: 8,
      type: 'checkbox',
      name: 'Hilt Binding',
      levels: [0, 1]
    },
    getStats: {
      baseSTR: (x: number): number => x,
      baseATK: (x: number): number => 4
    }
  }
]
