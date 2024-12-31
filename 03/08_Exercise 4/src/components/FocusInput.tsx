import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handelFocus = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter yor text" />
      <button onClick={handelFocus}>Click to Focus</button>
    </div>
  );
};

export default FocusInput;
