export type CounterState = {count: number}
type IncrementAction = {type: 'INCREMENT'}
type DecrementAction = {type: 'DECREMENT'}
export type CounterAction = IncrementAction | DecrementAction

export const CounterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1}
      break;
    case 'DECREMENT':
      return {count: state.count - 1}
      break;
  
    default:
      return state;
  }
}