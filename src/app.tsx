import React from 'react'
import { StatManualCalc } from './modules/stats'
import { ClassSelector } from './modules/class'
import { getPointsLeft } from './modules/charSlice'
import { useSelector } from 'react-redux'
import { AspdPotion } from './modules/class/buffs/consumabels'
import { PassiveStats } from './modules/stats/passiveStats'
import { WeaponSelect } from './modules/class/weapon_selection'
import { SelfBuffSkills } from './modules/class/buffs/selfBuff'

const App = (): JSX.Element => {
  const statsLeft = useSelector(getPointsLeft)
  return (
    <>
      <StatManualCalc key='stat_calc' />
      <ClassSelector key="class_selector" /> <br />
      <WeaponSelect key="weapon_selector"/> <br />
      <AspdPotion key="aspd_potion"/>
      <p>Stats left {statsLeft}</p>
      <PassiveStats key="passive_stats"/>
      <SelfBuffSkills key="self_buff"/>
    </>
  )
}

export default App
