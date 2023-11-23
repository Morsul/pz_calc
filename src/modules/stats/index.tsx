import React from 'react'
import { type ReactElement } from 'react'
import { PrimaryStats } from '../defaults/stats'
import { StatField } from './statField'
import { selectStats } from './statsSlice'
import { useSelector } from 'react-redux'

export const StatManualCalc = (): ReactElement[] => { // TODO: fully rerenders on 1 stat change ?
  const t = useSelector(selectStats)

  return (
    Object.values(PrimaryStats).map((e) =>
    <StatField
        key={'manual_' + e}
        statName={e}
        currentVal={t[e]}/>
    )
  )
}
