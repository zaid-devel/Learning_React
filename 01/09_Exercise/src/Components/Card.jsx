// const Card = (props) => {
//   return (
//     <div>{props.children}</div> // In React, props.children is a special prop that lets you pass content between the opening and closing tags of a component.
//   )
// }

// We can also destructure this by removing props and destructure children, so we no longer have to specify props. :)
const Card = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Card