import React, { useEffect } from 'react'
import { type ReactElement } from 'react'
import { changeClass, getJobID } from '../charSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ClassInfo } from '../defaults/classInfo'

export const ClassSelector = (): ReactElement => {
  useEffect(() => {
    dispatch(changeClass(24))
  }, [])

  const dispatch = useDispatch()

  const currentClass = useSelector(getJobID)

  return (
    <select onChange={e => dispatch(changeClass((Number(e.target.value))))} defaultValue={currentClass}>
      {
       ClassInfo.map((e, i) =>
          <option value={i} key={e.name} >
            {e.name}
          </option>
       )
      }
    </select>
  )
}
