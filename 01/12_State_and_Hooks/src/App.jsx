import { useState } from "react"
import ComponentOne from "./Components/componentOne"
import ComponentTwo from "./Components/componentTwo"
import React from "react"
import ExampleOne from "./Components/ExampleOne"
import ExampleTwo from "./Components/ExampleTwo"
import ExampleThree from "./Components/ExampleThree"

const App = () => {

  // Number

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


  // Array

//   const [friends, setFriends] = useState(['Aqib', 'Saood'])
//   const addOneFriend = () => {
//     setFriends([...friends, 'Zaid'])
//   }
//   const removeFriend = () => {
//     setFriends(friends.filter((f) => f != 'Saood'))
//   }
//   const updateOneFriend = () => {
//     setFriends(friends.map((f) => (f === 'Aqib' ? 'Aqib Khan' : f)))
//   }
//   return (
//     <section>
//       {friends.map((f) => (
//         <li key={Math.random()}>{f}</li>
//       ))}

//       <button onClick={addOneFriend}>Add new friend</button>
//       <button onClick={removeFriend}>Remove friend</button>
//       <button onClick={updateOneFriend}>Update friend</button>
//     </section>
//   )


  // Object

  // const [movie, setMovies] = useState({
  //   title : 'Jumanji',
  //   ratings: 8,
  // })
  // const handleclick = () => setMovies({...movie, ratings: 10})
  
  // return <section>
  //   <h1>Title: {movie.title}</h1>
  //   <p>Ratings: {movie.ratings}</p>
  //   <button onClick={handleclick}>Change Ratings</button>
  // </section>


  // Array of Objects:

  // const [movies, setMovies] = useState([
  //   {id: 1, title: 'Spiderman', ratings: 7},
  //   {id: 2, title: 'Superman', ratings: 6},
  //   {id: 3, title: 'Hulk', ratings: 8},
  // ])
  // const handleClick = () => {
  //   setMovies(movies.map(m => (
  //     m.id === 1 ? {...m, title: 'Batman', ratings: 10} : m
  //   )))
  // }
  // return (
  //   <section>
  //     {movies.map(m => (
  //       <li key={Math.random()}>{m.id}. Title: {m.title}, Ratings: {m.ratings}</li> // Math.random() as the key generates a new random key on every render.
  //     ))},
      
  //     <button onClick={handleClick}>Change Name</button>
  //   </section>
  // )


  // const [count, setCount] = useState(0)
  // return <section>
  //   <ComponentOne count={count} onClickHandler = {() => setCount(count + 1)}/>
  //   <ComponentTwo count={count} onClickHandler = {() => setCount(count + 1)}/>
  // </section>

  // 
  
  // const [count, setCount] = useState(Math.floor(Math.random()*100))
  //  or
  //  const [count, setCount] = useState(() => Math.floor(Math.random()*100))
  // return <section>
  //   <ComponentOne count={count} onClickHandler = {() => setCount(count + 1)}/>
  //   <ComponentTwo count={count} onClickHandler = {() => setCount(count + 1)}/>
  // </section>

  return (<section>
    <ExampleOne />
    <ExampleTwo />
    <ExampleThree />
  </section>)
}




export default App