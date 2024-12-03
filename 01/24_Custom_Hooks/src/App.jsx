// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => setData(data))
//   }, [])
//   return (
//     <div>{data && data.map(item => {
//       return <pre key={item.id}>{item.title}</pre>
//     })}</div>
//   )
// }

// export default App



import React from 'react'
import useFetch from './useFetch'

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>{data && data.map(item => {
      return <pre key={item.id}>{item.title}</pre>
    })}</div>
  )
}

export default App