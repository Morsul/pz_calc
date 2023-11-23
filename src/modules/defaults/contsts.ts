export const statCap = {
  classic: 99,
  transcendent: 125
}
export const leveCap = {
  classic: 99,
  transcendent: 120
}
export const aspdPotionList = [
  { name: 'Concentration potion', bonus: 4 },
  { name: 'Concentration potion', bonus: 6 },
  { name: 'Berserk  potion', bonus: 9 }
]
export const ClassList = [
  'HighPriest',
  'Sniper',
  'HighWizard',
  'Whitesmith',
  'LordKnight',
  'AssassinCross',
  'Champion',
  'Professor',
  'CLown',
  'Gypsy',
  'Creator',
  'Paladin',
  'Stalker',
  'Oboro',
  'Kagerou',
  'Priest',
  'Monk',
  'Hunter',
  'Bard',
  'Dancer',
  'Wizard',
  'Sage',
  'Blacksmith',
  'Alchemist',
  'Knight',
  'Crusader',
  'Assassin',
  'Rogue',
  'Ninja'
] as const

export type WeaponList = 'Bare Hands' | 'Book' | 'Bow' | 'Dagger' | 'Huuma Shuriken' | 'Instrument' | 'Katar' | 'Knuckle' | 'Mace' | 'One Handed Sword' | 'One Handed Spear' | 'One Handed Axe' | 'Two handed Sword' | 'Two handed Spear' | 'Two Handed Axe' | 'One Handed Rod' | 'Two Handed Rod' | 'Whip' | 'Shield' | 'L.Dagger' | 'L.Sword' | 'L.Axe'
