// import { Info } from "./UserInfo"
import { type Info } from "./UserInfo" // Declaring Info is not a component but a type.

// type AInfo = {
//     username: string,
//     email: string,
//     age: number,
//     location: string[], // string of array
//     admin: string
// }

type AInfo = Info & { admin: string }

const AdminInfo = ({username, email, age, location, admin}: AInfo) => {
  return (
    <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
        <li>{admin}</li>
    </ul>
  )
}

export default AdminInfo