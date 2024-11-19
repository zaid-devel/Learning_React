import React from 'react'
import Counter from './Counter'
import TodoList from "./TodoList";
import Profile from "./Profile"
import ShoppingList from './ShoppingList';

const App = () => {
  return (
    <div>
      <h1>React useState Examples</h1>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </div>
  )
}

export default App