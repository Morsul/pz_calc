import { type IClassDescription } from './types'

export const ClassInfo: IClassDescription[] = [
  {
    name: 'High Priest',
    type: 'transcendent',
    jobStatBonus: {
      STR: 7,
      AGI: 8,
      VIT: 7,
      INT: 12,
      DEX: 9,
      LUK: 2
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Mace', aspd: -3 },
        { name: 'One Handed Rod', aspd: -20 },
        { name: 'Two Handed Rod', aspd: -20 },
        { name: 'Book', aspd: -4 },
        { name: 'Knuckle', aspd: -20 }
      ],
      left: [{ name: 'Shield', aspd: -5 }]
    },
    usableAspdPotions: [true, true, false, false],
    selfBuffList: undefined
  },
  {
    name: 'Sniper',
    type: 'transcendent',
    jobStatBonus: {
      STR: 4,
      AGI: 11,
      VIT: 3,
      INT: 5,
      DEX: 14,
      LUK: 8
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -13 },
        { name: 'Bow', aspd: -7 }
      ],
      left: [{ name: 'Shield', aspd: -9 }]
    },
    usableAspdPotions: [true, true, true, false],
    selfBuffList: [1, 2, 3]
  },
  {
    name: 'High Wizard',
    type: 'transcendent',
    jobStatBonus: {
      STR: 3,
      AGI: 8,
      VIT: 5,
      INT: 17,
      DEX: 9,
      LUK: 3
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 146 },
        { name: 'Dagger', aspd: -4 },
        { name: 'One Handed Rod', aspd: -3 },
        { name: 'Two Handed Rod', aspd: -3 }
      ],
      left: [{ name: 'Shield', aspd: -8 }]
    },
    usableAspdPotions: [true, true, true, true],
    selfBuffList: undefined
  },
  {
    name: 'Whitesmith',
    type: 'transcendent',
    jobStatBonus: {
      STR: 6,
      AGI: 7,
      VIT: 6,
      INT: 6,
      DEX: 12,
      LUK: 8
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -10 },
        { name: 'One Handed Sword', aspd: -10 },
        { name: 'One Handed Axe', aspd: -6 },
        { name: 'Two Handed Axe', aspd: -10 },
        { name: 'Mace', aspd: -8 }
      ],
      left: [{ name: 'Shield', aspd: -5 }]
    },
    usableAspdPotions: [true, true, true, true],
    selfBuffList: [7, 8]
  },
  {
    name: 'Lord Knight',
    type: 'transcendent',
    jobStatBonus: {
      STR: 15,
      AGI: 8,
      VIT: 8,
      INT: 2,
      DEX: 9,
      LUK: 3
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -9 },
        { name: 'One Handed Sword', aspd: -5 },
        { name: 'Two handed Sword', aspd: -2 },
        { name: 'One Handed Axe', aspd: -10 },
        { name: 'Two Handed Axe', aspd: -15 },
        { name: 'Mace', aspd: -5 },
        { name: 'One Handed Spear', aspd: -15 },
        { name: 'Two handed Spear', aspd: -20 }
      ],
      left: [{ name: 'Shield', aspd: -5 }]
    },
    usableAspdPotions: [true, true, true, true],
    selfBuffList: [0, 4, 5]
  },
  {
    name: 'Assassin Cross',
    type: 'transcendent',
    jobStatBonus: {
      STR: 9,
      AGI: 15,
      VIT: 3,
      INT: 0,
      DEX: 10,
      LUK: 8
    },
    weaponsASPDMod: {
      right: [
        { name: 'Dagger', aspd: -2 },
        { name: 'One Handed Sword', aspd: -10 },
        { name: 'One Handed Axe', aspd: -11 },
        { name: 'Katar', aspd: -2 },
        { name: 'Bare Hands', aspd: 156 }
      ],
      left: [
        { name: 'Shield', aspd: -6 },
        { name: 'Dagger', aspd: -10 },
        { name: 'One Handed Sword', aspd: -12 },
        { name: 'One Handed Axe', aspd: -12 }
      ]
    },
    usableAspdPotions: [true, true, true, false],
    selfBuffList: [6]
  },
  {
    name: 'Champion',
    type: 'transcendent',
    jobStatBonus: {
      STR: 9,
      AGI: 9,
      VIT: 7,
      INT: 7,
      DEX: 10,
      LUK: 3
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Mace', aspd: -3 },
        { name: 'One Handed Rod', aspd: -20 },
        { name: 'Two Handed Rod', aspd: -18 },
        { name: 'Knuckle', aspd: 0 }
      ],
      left: [
        { name: 'Shield', aspd: -3 }
      ]
    },
    usableAspdPotions: [true, true, true, false],
    selfBuffList: undefined
  },
  {
    name: 'Professor',
    type: 'transcendent',
    jobStatBonus: {
      STR: 6,
      AGI: 9,
      VIT: 4,
      INT: 13,
      DEX: 11,
      LUK: 2
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 151 },
        { name: 'Dagger', aspd: -8 },
        { name: 'One Handed Rod', aspd: -10 },
        { name: 'Two Handed Rod', aspd: -10 },
        { name: 'Book', aspd: 2 }
      ],
      left: [{ name: 'Shield', aspd: -3 }]
    },
    usableAspdPotions: [true, true, true, false],
    selfBuffList: [11, 12]
  },
  {
    name: 'Clown',
    type: 'transcendent',
    jobStatBonus: {
      STR: 8,
      AGI: 12,
      VIT: 2,
      INT: 5,
      DEX: 14,
      LUK: 4
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -13 },
        { name: 'Bow', aspd: -8 },
        { name: 'Instrument', aspd: -5 }
      ],
      left: [{ name: 'Shield', aspd: -5 }
      ]
    },
    usableAspdPotions: [true, true, false, false],
    selfBuffList: [1, 2, 3, 9]
  },
  {
    name: 'Gypsy',
    type: 'transcendent',
    jobStatBonus: {
      STR: 6,
      AGI: 14,
      VIT: 2,
      INT: 5,
      DEX: 16,
      LUK: 2
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -13 },
        { name: 'Bow', aspd: -8 },
        { name: 'Whip', aspd: -5 }
      ],
      left: [{ name: 'Shield', aspd: -5 }]
    },
    usableAspdPotions: [true, true, false, false],
    selfBuffList: [1, 2, 3, 10]
  },
  {
    name: 'Creator',
    type: 'transcendent',
    jobStatBonus: {
      STR: 4,
      AGI: 6,
      VIT: 3,
      INT: 7,
      DEX: 14,
      LUK: 11
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -10 },
        { name: 'One Handed Sword', aspd: -5 },
        { name: 'One Handed Axe', aspd: -5 },
        { name: 'Two Handed Axe', aspd: -12 },
        { name: 'Mace', aspd: -5 }
      ],
      left: [{ name: 'Shield', aspd: -4 }]
    },
    usableAspdPotions: [true, true, true, true],
    selfBuffList: undefined
  },
  {
    name: 'Paladin',
    type: 'transcendent',
    jobStatBonus: {
      STR: 9,
      AGI: 8,
      VIT: 10,
      INT: 7,
      DEX: 8,
      LUK: 3
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -8 },
        { name: 'One Handed Sword', aspd: -3 },
        { name: 'Two handed Sword', aspd: -15 },
        { name: 'One Handed Axe', aspd: -10 },
        { name: 'Two Handed Axe', aspd: -15 },
        { name: 'Mace', aspd: -5 },
        { name: 'One Handed Spear', aspd: -13 },
        { name: 'Two handed Spear', aspd: -10 }
      ],
      left: [{ name: 'Shield', aspd: -5 }]
    },
    usableAspdPotions: [true, true, true, true],
    selfBuffList: [13]
  },
  {
    name: 'Stalker',
    type: 'transcendent',
    jobStatBonus: {
      STR: 9,
      AGI: 11,
      VIT: 4,
      INT: 3,
      DEX: 12,
      LUK: 6
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -5 },
        { name: 'One Handed Sword', aspd: -10 },
        { name: 'Bow', aspd: -10 }
      ],
      left: [{ name: 'Shield', aspd: -3 }]
    },
    usableAspdPotions: [true, true, true, true],
    selfBuffList: [6, 14]
  },
  {
    name: 'Oboro',
    type: 'transcendent',
    jobStatBonus: {
      STR: 7,
      AGI: 6,
      VIT: 4,
      INT: 6,
      DEX: 8,
      LUK: 4
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -3 },
        { name: 'Huuma Shuriken', aspd: -15 }
      ],
      left: [
        { name: 'Shield', aspd: -6 },
        { name: 'Dagger', aspd: -15 }
      ]
    },
    usableAspdPotions: [true, true, true, false],
    selfBuffList: undefined
  },
  {
    name: 'Kagerou',
    type: 'transcendent',
    jobStatBonus: {
      STR: 7,
      AGI: 6,
      VIT: 4,
      INT: 6,
      DEX: 8,
      LUK: 4
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -3 },
        { name: 'Huuma Shuriken', aspd: -15 }
      ],
      left: [
        { name: 'Shield', aspd: -6 },
        { name: 'Dagger', aspd: -15 }
      ]
    },
    usableAspdPotions: [true, true, true, false],
    selfBuffList: undefined
  },
  {
    name: 'Priest',
    type: 'classic',
    jobStatBonus: {
      STR: 5,
      AGI: 4,
      VIT: 5,
      INT: 5,
      DEX: 4,
      LUK: 7
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Mace', aspd: -3 },
        { name: 'One Handed Rod', aspd: -20 },
        { name: 'Two Handed Rod', aspd: -20 },
        { name: 'Book', aspd: -4 },
        { name: 'Knuckle', aspd: -20 }
      ],
      left: [{ name: 'Shield', aspd: -5 }]
    },
    usableAspdPotions: [true, true, false, false],
    selfBuffList: undefined
  },
  {
    name: 'Monk',
    type: 'classic',
    jobStatBonus: {
      STR: 8,
      AGI: 6,
      VIT: 6,
      INT: 2,
      DEX: 4,
      LUK: 3
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Mace', aspd: -3 },
        { name: 'One Handed Rod', aspd: -20 },
        { name: 'Two Handed Rod', aspd: -18 },
        { name: 'Knuckle', aspd: 0 }
      ],
      left: [
        { name: 'Shield', aspd: -3 }
      ]
    },
    usableAspdPotions: [true, true, true, false],
    selfBuffList: undefined
  },
  {
    name: 'Hunter',
    type: 'classic',
    jobStatBonus: {
      STR: 4,
      AGI: 6,
      VIT: 2,
      INT: 4,
      DEX: 10,
      LUK: 4
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -13 },
        { name: 'Bow', aspd: -7 }
      ],
      left: [{ name: 'Shield', aspd: -9 }]
    },
    usableAspdPotions: [true, true, true, false],
    selfBuffList: [1, 2, 3]
  },
  {
    name: 'Bard',
    type: 'classic',
    jobStatBonus: {
      STR: 2,
      AGI: 7,
      VIT: 3,
      INT: 5,
      DEX: 8,
      LUK: 4
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -13 },
        { name: 'Bow', aspd: -8 },
        { name: 'Instrument', aspd: -5 }
      ],
      left: [{ name: 'Shield', aspd: -5 }
      ]
    },
    usableAspdPotions: [true, true, false, false],
    selfBuffList: [1, 2, 3, 9]
  },
  {
    name: 'Dancer',
    type: 'classic',
    jobStatBonus: {
      STR: 2,
      AGI: 7,
      VIT: 3,
      INT: 5,
      DEX: 5,
      LUK: 8
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -13 },
        { name: 'Bow', aspd: -8 },
        { name: 'Whip', aspd: -5 }
      ],
      left: [{ name: 'Shield', aspd: -5 }]
    },
    usableAspdPotions: [true, true, false, false],
    selfBuffList: [1, 2, 3, 10]
  },
  {
    name: 'Wizard',
    type: 'classic',
    jobStatBonus: {
      STR: 1,
      AGI: 8,
      VIT: 1,
      INT: 12,
      DEX: 6,
      LUK: 2
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 146 },
        { name: 'Dagger', aspd: -4 },
        { name: 'One Handed Rod', aspd: -3 },
        { name: 'Two Handed Rod', aspd: -3 }
      ],
      left: [{ name: 'Shield', aspd: -8 }]
    },
    usableAspdPotions: [true, true, true, true],
    selfBuffList: undefined
  },
  {
    name: 'Sage',
    type: 'classic',
    jobStatBonus: {
      STR: 5,
      AGI: 5,
      VIT: 3,
      INT: 9,
      DEX: 5,
      LUK: 3
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 151 },
        { name: 'Dagger', aspd: -8 },
        { name: 'One Handed Rod', aspd: -10 },
        { name: 'Two Handed Rod', aspd: -10 },
        { name: 'Book', aspd: 2 }
      ],
      left: [{ name: 'Shield', aspd: -3 }]
    },
    usableAspdPotions: [true, true, true, false],
    selfBuffList: [11, 12]
  },
  {
    name: 'Blacksmith',
    type: 'classic',
    jobStatBonus: {
      STR: 6,
      AGI: 2,
      VIT: 6,
      INT: 2,
      DEX: 12,
      LUK: 2
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -10 },
        { name: 'One Handed Sword', aspd: -10 },
        { name: 'One Handed Axe', aspd: -6 },
        { name: 'Two Handed Axe', aspd: -10 },
        { name: 'Mace', aspd: -8 }
      ],
      left: [{ name: 'Shield', aspd: -5 }]
    },
    usableAspdPotions: [true, true, true, true],
    selfBuffList: [7, 8]
  },
  {
    name: 'Alchemist',
    type: 'classic',
    jobStatBonus: {
      STR: 5,
      AGI: 6,
      VIT: 3,
      INT: 7,
      DEX: 9,
      LUK: 0
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -10 },
        { name: 'One Handed Sword', aspd: -5 },
        { name: 'One Handed Axe', aspd: -5 },
        { name: 'Two Handed Axe', aspd: -12 },
        { name: 'Mace', aspd: -5 }
      ],
      left: [{ name: 'Shield', aspd: -4 }]
    },
    usableAspdPotions: [true, true, true, true],
    selfBuffList: undefined
  },
  {
    name: 'Knight',
    type: 'classic',
    jobStatBonus: {
      STR: 8,
      AGI: 2,
      VIT: 10,
      INT: 0,
      DEX: 6,
      LUK: 4
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -9 },
        { name: 'One Handed Sword', aspd: -5 },
        { name: 'Two handed Sword', aspd: -2 },
        { name: 'One Handed Axe', aspd: -10 },
        { name: 'Two Handed Axe', aspd: -15 },
        { name: 'Mace', aspd: -5 },
        { name: 'One Handed Spear', aspd: -15 },
        { name: 'Two handed Spear', aspd: -20 }
      ],
      left: [{ name: 'Shield', aspd: -5 }]
    },
    usableAspdPotions: [true, true, true, true],
    selfBuffList: [0, 4, 5]
  },
  {
    name: 'Crusader',
    type: 'classic',
    jobStatBonus: {
      STR: 7,
      AGI: 2,
      VIT: 7,
      INT: 6,
      DEX: 3,
      LUK: 5
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -8 },
        { name: 'One Handed Sword', aspd: -3 },
        { name: 'Two handed Sword', aspd: -15 },
        { name: 'One Handed Axe', aspd: -10 },
        { name: 'Two Handed Axe', aspd: -15 },
        { name: 'Mace', aspd: -5 },
        { name: 'One Handed Spear', aspd: -13 },
        { name: 'Two handed Spear', aspd: -10 }
      ],
      left: [{ name: 'Shield', aspd: -5 }]
    },
    usableAspdPotions: [true, true, true, true],
    selfBuffList: [13]
  },
  {
    name: 'Assassin',
    type: 'classic',
    jobStatBonus: {
      STR: 6,
      AGI: 10,
      VIT: 2,
      INT: 4,
      DEX: 8,
      LUK: 0
    },
    weaponsASPDMod: {
      right: [
        { name: 'Dagger', aspd: -2 },
        { name: 'One Handed Sword', aspd: -10 },
        { name: 'One Handed Axe', aspd: -11 },
        { name: 'Katar', aspd: -2 },
        { name: 'Bare Hands', aspd: 156 }
      ],
      left: [
        { name: 'Shield', aspd: -6 },
        { name: 'Dagger', aspd: -10 },
        { name: 'One Handed Sword', aspd: -12 },
        { name: 'One Handed Axe', aspd: -12 }
      ]
    },
    usableAspdPotions: [true, true, true, false],
    selfBuffList: [6]
  },
  {
    name: 'Rogue',
    type: 'classic',
    jobStatBonus: {
      STR: 6,
      AGI: 7,
      VIT: 6,
      INT: 4,
      DEX: 7,
      LUK: 0
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -5 },
        { name: 'One Handed Sword', aspd: -10 },
        { name: 'Bow', aspd: -10 }
      ],
      left: [{ name: 'Shield', aspd: -3 }]
    },
    usableAspdPotions: [true, true, true, true],
    selfBuffList: [6, 14]
  },
  {
    name: 'Ninja',
    type: 'classic',
    jobStatBonus: {
      STR: 1,
      AGI: 8,
      VIT: 1,
      INT: 5,
      DEX: 6,
      LUK: 4
    },
    weaponsASPDMod: {
      right: [
        { name: 'Bare Hands', aspd: 156 },
        { name: 'Dagger', aspd: -3 },
        { name: 'Huuma Shuriken', aspd: -15 }
      ],
      left: [
        { name: 'Shield', aspd: -6 }
      ]
    },
    usableAspdPotions: [true, true, true, false],
    selfBuffList: undefined
  }
]
