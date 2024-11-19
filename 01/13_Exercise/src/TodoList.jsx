import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const [todo, setTodo] = useState(['hey', 'bye'])
    const add = () => setTodo([...todo, 'Wakeup at 5 AM'])
  return (
    <div>
        <section>
            <h1>Todo:</h1>
            {todo.map((e) => (
                <li key={Math.random()}>{e}</li>
            ))}
            <br />
            <button onClick={add}>Add Task</button>
        </section>
    </div>
  )
}

export default TodoList