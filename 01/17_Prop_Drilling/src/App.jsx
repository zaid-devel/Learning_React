import React from 'react'
import ComponentA from './Components/ComponentA'
import ComponentC from './Components/ComponentC'
import ComponentB from './Components/ComponentB'

const App = () => {
  const name = 'Zaid'
  return (
    <div>App
      <ComponentA name={name}/>
    </div>
  )
}

export default App