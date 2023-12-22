import React from 'react'
import { useSelector } from 'react-redux'
import { getFinalStats } from '../charSlice'

export const PassiveStats = (): JSX.Element => {
  const finalStats = useSelector(getFinalStats)
  return (
    <div className='passive_stats'>
      <p>Hit: {finalStats[0].hit}</p>
      <p>Flee: {finalStats[0].flee}</p>
      <p>Crit: {finalStats[0].crit}</p>
      <p>Aspd: {finalStats[1]}</p>
    </div>
  )
}
