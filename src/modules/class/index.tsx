import React, { useEffect } from 'react'
import { type ReactElement } from 'react'
import { changeClass } from '../stats/statsSlice'
import { useDispatch } from 'react-redux'
import { ClassInfo } from '../defaults/classInfo'

export const ClassSelector = (): ReactElement => {
  useEffect(() => {
    dispatch(changeClass(24))
  }, [])

  const dispatch = useDispatch()

  return (
    <select onChange={e => dispatch(changeClass((Number(e.target.value))))} >
      {
       ClassInfo.map((e, i) =>
          <option value={i} key={e.name}>
            {e.name}
          </option>
       )
      }
    </select>
  )
}
