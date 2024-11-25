import React from 'react'
import { useReducer } from 'react'

const initialState = { count: 0 }

const reducer = (state, action) => { // state means what we will update and action means how we will update.
  switch (action.type) {
    case 'Increment':
      return {...state, count: state.count + 1}
      break;
    case 'Decrement':
      return {...state, count: state.count - 1}
      break;
    case 'Reset':
      return {...state, count: 0}
      break;
  
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'Increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'Decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
    </div>
  )
}

export default App