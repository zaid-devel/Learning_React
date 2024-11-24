import React from "react";
import { Data, Data1 } from "../App";
import { useContext } from "react";

const ComponentC = () => {
  //   return (
  //     <Data.Consumer>
  //       {(name) => { // Consumer needs Callback function
  //           // <h1>{name}</h1>
  //           return (
  //         <Data1.Consumer>
  //             {(age) => {
  //                 return <h1>My name is {name} and I'm 23 years old</h1>
  //             }}
  //         </Data1.Consumer>
  //         );
  //       }}
  //     </Data.Consumer>
  // This is not a good way to paas our data, at least it is better than prop drilling, to solve this problem we use useContext() hook.
  /*
    In our approach, we used the Consumer component to access values from the context. While this works, using multiple nested Consumer components can be a bit cumbersome, especially as our component tree grows. We can simplify this by using the useContext hook, which makes our code cleaner and easier to read.

    Refactored Code with useContext Hook:
    Instead of nesting Consumer components, we can use the useContext hook to directly access the context values:
    */
  // We use useContext to directly access the context values
  const name = useContext(Data); // Access the 'Data' context value
  const age = useContext(Data1); // Access the 'Data1' context value

  return (
    <h1>
      My name is {name} and I'm {age} years old
    </h1>
  );
};
// By switching to the useContext hook, we simplify how we work with context in our React components, making it easier for us to handle multiple pieces of shared state efficiently!
export default ComponentC;
