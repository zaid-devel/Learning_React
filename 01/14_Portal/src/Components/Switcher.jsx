import React, { useState } from 'react'

const Switcher = () => {
    const [sw, setSw] = useState(false)
  return (
    <div>
        <br />
        {sw ? <span>Dark</span> : <span>light</span>}
        <br />
        <br />
        <input type="text" key={sw ? 'dark' : 'light'}/>
        <br />
        <br />
        <button onClick={() => setSw((s) => !s)}>Switch</button>
    </div>
  )
}

export default Switcher