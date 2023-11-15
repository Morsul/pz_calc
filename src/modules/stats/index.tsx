import React from 'react'
import { type ReactElement } from 'react'
import { PrimaryStats } from '../defaults/stats'
import { StatField } from './statField'

export const StatManualCalc = (): ReactElement[] => {
  return (
    Object.values(PrimaryStats).map((e) =>
    <StatField
      key={'manual_' + e}
      statName = {e}/>)
  )
}
