import React from 'react'
import { createContext } from 'react'
import ComponentA from './Components/ComponentA'

export const Data = createContext() // this line creates a context called Data that can be used to share data across components in a React app.
export const Data1 = createContext()

const App = () => {
  const name = 'Zaid'
  const age = 23
  return (
    // <div>
    //   <Data.Provider value={name}>
    //     <ComponentA />
    //   </Data.Provider>
    // </div>
    /*
    This code makes the name value available to ComponentA and any other child component inside the <Data.Provider> by using React's Context API.
    */

    <Data.Provider value={name}>
      <Data1.Provider value={age}>
        <ComponentA />
      </Data1.Provider>
    </Data.Provider>
  )
}

export default App
