// We setup useEffect hook to run some code WHEN
// 👉 Component renders for the (First Time)
// 👉 & WHENEVER it re-renders
// 👉 & some data in our component changed.

// import React from 'react'
// import { useState, useEffect } from 'react'

// const App = () => {
  // const [value, setValue] = useState(0)
  // useEffect(() => {
  //   console.log(' call useEffect')
  //   document.title = `Increment ${value}`
  // }) // fires after every render
  
  // const [value, setValue] = useState(0)
  // useEffect(() => {
  //   console.log(' call useEffect')
  //   document.title = `Increment ${value}`
  // }, []) // Only fire once
  
  // const [value, setValue] = useState(0)
  // useEffect(() => {
  //   console.log(' call useEffect')
  //   document.title = `Increment ${value}`
  // }, [value]) // Only fire when the value state changes.
  
  // const [something, setSomething] = useState(0)
  


  // Now Conditional rendering:

//   const [value, setValue] = useState(0)
//   useEffect(() => {
//     if (value > 2) {
//       console.log(' call useEffect')
//       document.title = `Increment ${value}`
//     }
//   }, [value]) // Only fire when the value state changes.
  

//   return (
//     <div>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click Me</button>
//       <br />
//       {/* <h2>{something}</h2> */}
//       {/* <button onClick={() => setSomething(something + 1)}>Increment by Something</button> */}
//     </div>
//   )
// }

// export default App

/*
How It Works:

Initial Render:

Both value and something are 0 initially.
The useEffect hook is run once (because the component renders for the first time), updating the document title to Increment 0.
When value changes (when the "Click Me" button is clicked):

The value state is updated, causing the component to re-render.
Because value is in the dependency array of useEffect, the effect will run again, logging 'call useEffect' to the console and updating the document title to Increment ${value}.
When something changes (when the "Increment by Something" button is clicked):

The something state is updated, causing a re-render.
However, because something is not a dependency of the useEffect hook, the effect does not run again when something changes. Only value affects the useEffect.

Summary:
- The component has two pieces of state: value and something.
- useEffect watches value and updates the document title every time value changes.
- Clicking the "Click Me" button increments value, and clicking "Increment by Something" increments something, but only value triggers the effect that changes the document title.
*/



import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json()
      if(data && data.length) setData(data)
    }
    getData()
  })
  return (
    <div>
      <ul>
        {data.map(todo => <li key={todo.id}> Id: {todo.id} <br /> Title: {todo.title} <br /> Body: {todo.body}</li>)}
      </ul>
      
    </div>
  )
}

export default App

/*
Explanation:

async function getData() { ... }

Inside useEffect, we are defining an asynchronous function getData. This is a function that can perform asynchronous operations, like fetching data from an API.
The async keyword indicates that the function will use await to handle asynchronous operations (such as fetch).


const response = await fetch("https://jsonplaceholder.typicode.com/todos")

fetch() is used to make an HTTP request to an API. In this case, it is making a request to "https://jsonplaceholder.typicode.com/todos", which is a mock API that returns a list of "todos".
fetch() returns a Promise, which resolves to a Response object.
await pauses the function execution until the fetch() call completes and returns the response.


const data = await response.json()

After receiving the response from fetch(), we use response.json() to parse the response body into JSON format. This is necessary because the response is typically in a format like JSON, and we need to extract the actual data (the list of todos in this case).
await is used again to pause the execution until the JSON data is successfully extracted.


*/