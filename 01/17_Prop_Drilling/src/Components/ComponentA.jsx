import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = ({name}) => {
  return (
    <div>Component A:
        <ComponentB name={name}/>
    </div>
  )
}

export default ComponentA