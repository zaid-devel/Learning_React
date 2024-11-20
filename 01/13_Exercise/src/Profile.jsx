// import React, { useState } from 'react'

// const Profile = () => {
//     const [info, setInfo] = useState({name: 'Zaid', age: 23})
//     const changeName = () => setInfo({...info, name: 'Jacob'})
//     const changeAge = () => setInfo({...info, age: 26})
//   return (
//     <div>
//         <h1>Profile Info:</h1>
//         <h2>Name:{info.name}</h2>
//         <button onClick={changeName}>Update Name</button>
//         <br />
//         <h2>Age:{info.age}</h2>
//         <button onClick={changeAge}>Update Age</button>
//     </div>
//   )
// }

// export default Profile\

import React, { useState } from 'react'

const Profile = () => {
    const [info, setInfo] = useState({name: '', age: ''})
    const handleChange = (e) => {
      const {name, value} = e.target
      setInfo((prevInfo) => ({
        ...prevInfo, [name]: value,
      }))
    }
    
  return (
    <div>
        <h1>User Profile:</h1>
        <div>
        <label>Name: <input type="text" name='name' value={info.name} onChange={handleChange}/></label>
        </div>
        <div>
        <label>Age: <input type="number" name='age' value={info.age} onChange={handleChange}/></label>
        </div>
        <h3>Profile Information</h3>
        <p>Name: {info.name}</p>
        <p>Age: {info.age}</p>
    </div>
  )
}

export default Profile