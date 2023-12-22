import React from 'react'
import { type ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeAspdPotion, getJobID } from '../../charSlice'
import { ClassInfo } from '../../defaults/classInfo'
import { aspdPotion } from '../../defaults/consumables'

export const AspdPotion = (): ReactElement => {
  const usablePots = ClassInfo[useSelector(getJobID)].usableAspdPotions
  // useEffect(() => {
  // }, [])

  const dispatch = useDispatch()

  return (
    <select onChange={e => dispatch(changeAspdPotion((Number(e.target.value))))}>
      {
        aspdPotion.filter((e, i) => usablePots[i]).map((e, i) =>
          <option value={i} key={e.name + i}>{e.name}</option>
        )
      }
    </select>
  )
}
