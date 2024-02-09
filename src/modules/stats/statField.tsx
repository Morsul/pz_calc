import React, { memo } from 'react'
import { setValue, getMaxStat, getJobStats } from '../charSlice'
import { useDispatch, useSelector } from 'react-redux'
import { type IStatFields } from '../defaults/types'
import { type JSX } from 'react/jsx-runtime'

export const StatField = memo(function StatField ({ statName, currentVal }: IStatFields): JSX.Element {
  // const curretnVal = useSelector(selectStats)
  const dispatch = useDispatch()

  const nextUpCost = currentVal < 100 ? Math.floor((currentVal - 1) / 10) + 2 : 4 * Math.floor((currentVal - 100) / 10) + 16

  return (
    <div className={'manual_stat' + statName}>
      <span className="stat_name">{statName}</span>
      {/* <button onClick={() => dispatch(decrement(statName))}>-</button> */}
      <input type="number" min="1" max={useSelector(getMaxStat)} className='level_stats' value={currentVal} onChange={e => dispatch(setValue({ name: statName, amount: Number(e.target.value) }))}/>
      <span className="next_step">{nextUpCost}</span>
      {/* <button onClick={() => dispatch(increment(statName))}>+</button> */}

      <span className='gear_stats'>{'   +' + useSelector(getJobStats)[statName]}</span>
    </div>
  )
})
