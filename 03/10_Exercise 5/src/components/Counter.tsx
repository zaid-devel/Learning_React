import { useReducer } from "react"
import { CounterReducer, CounterState } from "../reducers/CounterReducer"

const initialState: CounterState = {count: 0}

const Counter = () => {
    const [state, dispatch] = useReducer(CounterReducer, initialState)
    const increment = () => dispatch({type: "INCREMENT"})
    const decrement = () => dispatch({type: "DECREMENT"})
  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter