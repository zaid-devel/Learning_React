import React from "react";
import { useState } from "react";
import PopupContent from "./PopupContent";
import Switcher from "./Switcher";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue) // this is an API which is used to write the inputValue to the clipboard.
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 5000); // Reset copied state after 2 seconds
      })
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      <PopupContent copied={copied}/>
      <br /><br /><br />
      <Switcher />
    </div>
  );
};

export default CopyInput;


// .catch(() => {
//     alert("Failed to copy text");
//   });

// {copied && <span>Copied!</span>} {/*Shortcut of : */}
//       {/* if (copied) {
//         return <span>Copied!</span>;
//         } else {
//             return null;  // render nothing
//         } */}
