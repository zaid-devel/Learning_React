import { useReducer } from "react"

type State = {count: number}
type Action = {type: "Increment"} | {type:"Decrement"}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "Increment":
      return {count: state.count + 1}
    case "Decrement":
      return {count: state.count - 1}
    default:
      return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({type: "Increment"})}>Increment</button>
      <button onClick={() => dispatch({type: "Decrement"})}>Decrement</button>
    </div>
  )
}

export default Counter