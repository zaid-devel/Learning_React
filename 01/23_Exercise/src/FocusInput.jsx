import React from "react";
import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Click the Button to focus"/>
      <button onClick={() => focusInput()}>Focus and Write</button>
    </div>
  );
};

export default FocusInput;
