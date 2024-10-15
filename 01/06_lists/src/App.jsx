// const App = () => {
//   const numbers = [1, 2, 3, 4, 5] // This line declares an array numbers containing the values [1, 2, 3, 4, 5].
//   return (
//     <main>
//       {numbers.map((numbers)=>( /* numbers.map() iterates over each value in the numbers array. For each element in the array (e.g., 1, 2, 3, etc.), a <ul> element is returned, containing an <li> with the corresponding number. */
//         <ul key={numbers}>
//           <li>{numbers}</li>
//         </ul>
//         /* For each number, a unique unordered list (<ul>) is created with the current number passed as the key prop. The key prop is necessary in React to help identify which items have changed, are added, or removed, improving performance during updates. Each <ul> contains an <li> that displays the number itself. */
//       ))}
//     </main>
//   )
// }
// export default App

// /*
// This will render a list of <ul> elements, each containing a single <li> with a number from 1 to 5:
// <main>
//   <ul key="1"><li>1</li></ul>
//   <ul key="2"><li>2</li></ul>
//   <ul key="3"><li>3</li></ul>
//   <ul key="4"><li>4</li></ul>
//   <ul key="5"><li>5</li></ul>
// </main>
// */



// Example 2

const App = () => {
  const usersInfo = [
    {
      username: 'Rogers',
      email: 'steve@gmail.com',
      location: 'USA',
    },
    {
      username: 'Spidy',
      email: 'spidy@gmail.com',
      location: 'NY',
    },
    {
      username: 'Shang',
      email: 'shang@gmail.com',
      location: 'China',
    },
  ]
  return (
    <div>
      {usersInfo.map(user => (
        <ul key={Math.random() /* React requires a unique key for each item in a list to help with efficient rendering. In this case, Math.random() is used to generate a random key for each user list. However, this approach is not ideal because the key should remain stable across renders. */}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))
    }
      {usersInfo.map(({username, email, location}) => ( // For each user in the array, it destructures the properties username, email, and location. This means instead of writing user.username, user.email, and user.location in the JSX, you can directly refer to them as username, email, and location.
        <ul key={Math.random()}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))
    }
    </div>
  )
}
export default App