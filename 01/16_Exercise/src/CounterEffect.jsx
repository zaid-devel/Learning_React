import React from 'react'
import { useState, useEffect } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (count > 2) document.title = `Increment ${count}`
    },[count]) // if dependency not given, the useEffect will not work
  return (
    <div>
        {count}
        <br />
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default CounterEffect