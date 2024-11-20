// import React from 'react'
// import { useState } from 'react'

// const TodoList = () => {
//     const [todo, setTodo] = useState(['hey', 'bye'])
//     const add = () => setTodo([...todo, 'Wakeup at 5 AM'])
//   return (
//     <div>
//         <section>
//             <h1>Todo:</h1>
//             {todo.map((e) => (
//                 <li key={Math.random()}>{e}</li>
//             ))}
//             <br />
//             <button onClick={add}>Add Task</button>
//         </section>
//     </div>
//   )
// }

// export default TodoList


import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([])
  const [inputValue, setInputValue] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault() // This prevents the default form submission behavior, which would reload the page.
    if(inputValue.trim()){
      setTodo([...todo, inputValue])
      setInputValue("")
    }
  }
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Add a new Todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todo.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList