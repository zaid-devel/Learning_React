import AdminInfo from "./components/AdminInfo"
import UserInfo from "./components/UserInfo"
import { Info, AdminInfoList } from "./types"

const App = () => {
  const user : Info = {
    id: 1,
    name: 'Zaid',
    email: 'Zaid@gmail.com'
  }
  const admin : AdminInfoList = {
    id: 2,
    name: 'Mohammad',
    email: 'mohammad@gmail.com',
    role: 'admin',
    lastLogin: new Date(),
  }
  return (
    <div>
      <UserInfo user={user}/>
      <AdminInfo admin={admin}/>
    </div>
  )
}

export default App