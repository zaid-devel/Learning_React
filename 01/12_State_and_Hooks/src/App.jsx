import { useState } from "react"
import React from "react"

const App = () => {

  // const [count, setCount] = useState(0)
  // const increment = () => setCount (count + 1)
  // const decrement = () => setCount (count - 1)
  // return (
  //   <section>
  //     <h1>{count}</h1>
  //     <button style={{fontSize: '50px'}} onClick={increment}>+</button>
  //     <button style={{fontSize: '50px'}} onClick={decrement}>-</button>
  //   </section>
  // )

  const [friends, setFriends] = useState(['Aqib', 'Saood'])
  const addOneFriend = () => {
    setFriends([...friends, 'Zaid'])
  }
  const removeFriend = () => {
    setFriends(friends.filter((f) => f != 'Saood'))
  }
  const updateOneFriend = () => {
    setFriends(friends.map((f) => (f === 'Aqib' ? 'Aqib Khan' : f)))
  }
  return (
    <section>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOneFriend}>Add new friend</button>
      <button onClick={removeFriend}>Remove friend</button>
      <button onClick={updateOneFriend}>Update friend</button>
    </section>
  )

}


export default App