import React from 'react'
import { getJobID } from '../../charSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ClassInfo } from '../../defaults/classInfo'
import { SelfBuffSkills } from '../../defaults/selfBuffSkills'

export const SelfSkillBuff = (): JSX.Element => {
  const currentClass = useSelector(getJobID)
  const dispatch = useDispatch()
  return (
    <select>
      {
        ClassInfo[currentClass].selfBuffList?.map(e =>
          <option value={e} key={'buffid' + e} >
            {SelfBuffSkills.}
          </option>
        )
      }
    </select>
  )
}
