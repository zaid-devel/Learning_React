import AdminInfo from "./components/AdminInfo"
import UserInfo from "./components/UserInfo"


const App = () => {
  return (
    <div>
      <h1>UserInfo 👇</h1>
      <UserInfo
      username='Alex'
      email='alex@gmail.com'
      age={20}
      location={['Earth', 'IND']} />

      <h1>AminInfo 👇</h1>
      <AdminInfo
      username='Alex'
      email='alex@gmail.com'
      age={20}
      location={['Mars', 'Unknown']}
      admin='yes'
      />
    </div>
  )
}

export default App