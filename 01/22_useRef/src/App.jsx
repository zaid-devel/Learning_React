import React, { useRef } from "react";

const App = () => {
  const inputElement = useRef(null)
  const focusInput = () => {
    inputElement.current.focus()
    inputElement.current.value = 'Zaid'
  }
  return (
  <div>
    <input type="text" ref={inputElement} />
    <button onClick={() => focusInput()}>Focus And Write My Name</button>
  </div>
);
};

export default App;
