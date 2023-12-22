import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeWeapon, getJobID } from '../../charSlice'
import { ClassInfo } from '../../defaults/classInfo'

export const WeaponSelect = (): JSX.Element => {
  const currentClass = useSelector(getJobID)
  const dispatch = useDispatch()

  return (<select onChange={e => dispatch(changeWeapon(['right', e.target.value]))}> {
      ClassInfo[currentClass].weaponsASPDMod.right.map(e =>
        <option value={e.name} key={e.name} >
          {e.name}
        </option>
      )
    }
  </select>)
}
