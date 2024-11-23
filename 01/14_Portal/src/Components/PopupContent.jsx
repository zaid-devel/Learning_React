import React from 'react'
import {createPortal} from 'react-dom'

const PopupContent = ({copied}) => {
  return createPortal(
    <section>
        {copied && (
            <div style={{position: 'absolute', right: '10vh', bottom: '10vh'}}>Copied to Clipboard</div>
        )}
    </section>,
    document.querySelector('#popup-content')
  )
}

export default PopupContent