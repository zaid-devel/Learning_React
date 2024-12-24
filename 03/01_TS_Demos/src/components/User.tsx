// import { ReactNode } from "react"
import { FC } from "react"

//Type:
// type UserShape = {
    //     name: string,
    //     age: number,
    //     isStudent: boolean
    // }
    

// // Interface:
// interface UserShape{
//     name: string,
//     age: number,
//     isStudent: boolean
// }

// const User = ({name, age, isStudent}: UserShape) => {
//   return (
//     <div>
//         <h2>{name}</h2>
//         <h2>{age}</h2>
//         <h2>{isStudent}</h2>
//     </div>
//   )
// }


// // React Node
// interface UserShape{
//     children: ReactNode
// }

// const User = ({ children } : UserShape) => {
//     return (
//         <div>
//             <h1>{children}</h1>
//         </div>
//     )
// }


// Functional Component
type UserShape = {
    name: string,
    age: number,
    isStudent: boolean
}

const User: FC<UserShape> = ({ name, age, isStudent }) => {
    return <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{isStudent}</h1>
    </div>
}

export default User