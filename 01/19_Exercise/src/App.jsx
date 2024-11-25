import React from 'react'
import UserProfile from './Components/UserProfile'
import {UserProvider} from './UserContext'
import UpdateUser from './Components/UpdateUser'

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  )
}

export default App
