import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = ({name}) => {
  return (
    <div>Component B: 
        <ComponentC name={name}/>
    </div>
  )
}

export default ComponentB