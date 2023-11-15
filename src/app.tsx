import React from 'react'
import { StatManualCalc } from './modules/stats'
import { ClassSelector } from './modules/class'
import { getPointsLeft } from './modules/stats/statsSlice'
import { useSelector } from 'react-redux'

const App = (): JSX.Element => {
  const statsLeft = useSelector(getPointsLeft)
  return (
    <>
      <StatManualCalc key='stat_calc' />
      <ClassSelector key="class_selector" />
      <p>Stats left {statsLeft}</p>
    </>
  )
}

export default App
