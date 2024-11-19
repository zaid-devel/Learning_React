import React from "react"

const componentOne = ({count, onClickHandler}) => {
  const handleClick = () => onClickHandler()
    
  return (
  <div>
    <p>{count}</p>
    <button onClick={handleClick}>Increment</button>
  </div>
  )
}

export default componentOne