import { useState } from "react"
import React, { useEffect } from 'react'

const ExampleThree = () => {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem('name')
        return savedName ? JSON.parse(savedName) : ''
    })
    /* useState: This hook is used to create the name state variable and the setName function to update it.
    The initial state value is set via a function, which is passed to useState. Inside this function:
    localStorage.getItem('name') checks if there is a previously saved value for 'name' in the browser’s localStorage.
    If a saved value exists, it is parsed from a JSON string into a JavaScript object using JSON.parse(savedName).
    If no saved value is found, it defaults to an empty string ('').
    This ensures that the user's name persists across page reloads (it’s saved in localStorage). */

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name))
    }, [name])
    /* useEffect: The code inside this hook runs after each render where the name state changes.
    The effect saves the current name state into localStorage so that it persists when the user reloads the page.
    localStorage.setItem('name', JSON.stringify(name)): This converts the name state to a JSON string and stores it in the browser's localStorage under the key 'name'.
    Dependency array [name]: The useEffect will only run when the name state changes, meaning it won’t run on every render, but only when the name is updated. */

    const handleChange = (event) => {
        setName(event.target.value)
    }
    /* This function is called when the user types in the input field. It receives the event object from the input field and updates the name state with the new value (event.target.value).
    setName(event.target.value): This updates the name state to the current input value, allowing the UI to reflect the changes as the user types. */

    const handleClear = () => setName('')
    /* This function is triggered when the user clicks the "Clear Name" button. It clears the name state by setting it to an empty string ('').
    This also triggers a re-render, and the input field will be cleared. */

  return (
    <div>
        <h1>Your Name: {name}</h1>
        <input type="text" value={name} onChange={handleChange} placeholder='Enter Your Name' />
        <button onClick={handleClear}>Clear Name</button>
    </div>
  )
}

export default ExampleThree