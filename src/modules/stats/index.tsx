import React from 'react'
import { type ReactElement } from 'react'
import { PrimaryStats } from '../defaults/stats'
import { StatField } from './statField'
import { current } from '@reduxjs/toolkit'
import { selectStats } from './statsSlice'
import { useSelector } from 'react-redux'

export const StatManualCalc = (): ReactElement[] => { // TODO: fully rerenders on 1 stat change ?
  let t = useSelector(selectStats);
  
  return (
    Object.values(PrimaryStats).map((e) =>
    <StatField
        key={'manual_' + e}
        statName={e} 
        currentVal={t[e]}/>
      )
  )
}
