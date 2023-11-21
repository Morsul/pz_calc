import React, { memo, useEffect, useState } from 'react'
import { increment, decrement, selectStats } from './statsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { type IStatFields } from '../defaults/types'

// export const StatField = ({ statName, currentVal }: IStatFields): JSX.Element => { 

//   // const curretnVal = useSelector(selectStats)
//   const dispatch = useDispatch()

//   let nextUpCost = currentVal < 100 ?  Math.floor((currentVal - 1) / 10) + 2 : 4 * Math.floor((currentVal - 100) / 10) + 16

//   console.log("test call", nextUpCost, currentVal)
//   return (
//     <div className={'manual_stat' + statName}>
//       <button onClick={() => dispatch(decrement(statName))}>-</button>
//       <input type="text" className='level_stats' value={currentVal} readOnly/>
//       <span className="nextStep">{nextUpCost}</span> 
//       <button onClick={() => dispatch(increment(statName))}>+</button>

//       <span className='gear_stats'>+1</span>
//     </div>
//   )
// }

export const StatField = memo(function StatField({ statName, currentVal }: IStatFields): JSX.Element { 

  // const curretnVal = useSelector(selectStats)
  const dispatch = useDispatch()

  let nextUpCost = currentVal < 100 ?  Math.floor((currentVal - 1) / 10) + 2 : 4 * Math.floor((currentVal - 100) / 10) + 16

  console.log("test call", nextUpCost, currentVal)
  return (
    <div className={'manual_stat' + statName}>
      <button onClick={() => dispatch(decrement(statName))}>-</button>
      <input type="text" className='level_stats' value={currentVal} readOnly/>
      <span className="nextStep">{nextUpCost}</span> 
      <button onClick={() => dispatch(increment(statName))}>+</button>

      <span className='gear_stats'>+1</span>
    </div>
  )
})