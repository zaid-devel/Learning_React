import React, { useState } from 'react'

const Profile = () => {
    const [info, setInfo] = useState({name: 'Zaid', age: 23})
    const changeName = () => setInfo({...info, name: 'Jacob'})
    const changeAge = () => setInfo({...info, age: 26})
  return (
    <div>
        <h1>Profile Info:</h1>
        <h2>Name:{info.name}</h2>
        <button onClick={changeName}>Update Name</button>
        <br />
        <h2>Age:{info.age}</h2>
        <button onClick={changeAge}>Update Age</button>
    </div>
  )
}

export default Profile