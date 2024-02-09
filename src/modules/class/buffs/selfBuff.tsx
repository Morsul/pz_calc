import React from 'react'
import { getJobID } from '../../charSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ClassInfo } from '../../defaults/classInfo'
import { SelfBuffSkillsList } from '../../defaults/selfBuffSkills'
import { type JSX } from 'react/jsx-runtime'

export const SelfBuffSkills = (): JSX.Element => {
  const currentClass = useSelector(getJobID)
  const dispatch = useDispatch()

  return (
    <div>
    {
      ClassInfo[currentClass].selfBuffList?.map(skillid => {
        const skill = SelfBuffSkillsList.find(skill => skill.description.id === skillid)

        if (skill != null) {
          return (<div key={'test' + skillid}>
            <label className='self_buffskill' key={'ssb' + skillid} htmlFor={'ssb' + skillid}>
              {
                skill.description.name
              }
              {
                ((): JSX.Element => {
                  switch (skill.description.type) {
                    case 'select':
                      return (
                          <select id={'ssb' + skillid}>
                            {[...Array(skill.description.levels[1] + 1).keys()].map(i => <option key={skill.description.name + i} value={i}>{i}</option>)}
                          </select>
                      )
                    case 'checkbox':
                      return <input type="checkbox" name={'ssb' + skillid} id={'ssb' + skillid} />
                    default: return <></>
                  }
                })()
              }

            </label>
            <br />
          </div>
          )
        }
        return <></>
      })
    }
    </div>
  )
}
