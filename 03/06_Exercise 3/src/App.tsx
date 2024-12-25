import { useState } from "react"
import UserProfile from "./components/UserProfile"
import Todo from "./components/Todo"

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <UserProfile />
      <Todo />
    </div>
  )
}

export default App