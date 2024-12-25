import { useState } from "react"


const Counter = () => {
  const [count, setCount] = useState<number>(0) // here we are providing a type for our useState.
  
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter