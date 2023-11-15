import React from 'react'
import { increment, decrement, selectStats } from './statsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { type IStatFields } from '../defaults/types'

export const StatField = ({ statName }: IStatFields): JSX.Element => {
  const count = useSelector(selectStats) // TODO remove any
  const dispatch = useDispatch()
  return (
    <div className={'manual_stat' + statName}>
      <button onClick={() => dispatch(decrement(statName))}>-</button>
      <input type="text" className='level_stats' value={count[statName]} readOnly/>
      <span className='gear_stats'>+1</span>
      <button onClick={() => dispatch(increment(statName))}>+</button>
      {/* <span className="nextStep">{nextStep}</span> */}
    </div>
  )
}
