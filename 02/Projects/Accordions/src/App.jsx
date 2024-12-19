import React from 'react'
import Accordion from './Components/Accordions'
import { accordionData } from './Utils/Content'

const App = () => {
  return (
    <div>
      <div className='accordion'>
        {accordionData.map(({title, content}) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default App

