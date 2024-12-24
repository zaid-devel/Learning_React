# TypeScript

TypeScript is a programming language that builds on JavaScript by adding extra features to make it more powerful and easier to work with, especially for larger projects.

Here's a simple way to understand it:

1. JavaScript + Extra Features: TypeScript is essentially JavaScript with some additional features that help us write better and less error-prone code. The core difference is that TypeScript adds types.

2. What are Types?: In TypeScript, we can define the kind of data a variable should hold. For example, we can specify if a variable should hold a number, a string, or an array. This is called type checking. Types help catch errors early, making it easier for us to avoid bugs.

    - For example, in TypeScript, we can write:

    ```javascript
    let age: number = 30;  // 'age' must be a number
    ```
    This way, if we accidentally try to assign a string to age, TypeScript will warn us about it.

3. Type Safety: TypeScript helps prevent common mistakes. For example, if we try to use a function or method that doesn't exist on an object, TypeScript will tell us, helping us avoid runtime errors.

4. Compiling: TypeScript code is not directly understood by browsers or servers, so it needs to be compiled (converted) into JavaScript first. But once it’s compiled, the code runs just like normal JavaScript.

5. Benefits:
Error Prevention: By catching errors early (while writing code), TypeScript helps us write more reliable applications.
Better Tools: Since TypeScript knows the types of variables, it provides features like auto-completion, making it easier for us to write and understand the code.
Improved Maintainability: TypeScript's features are especially helpful for working on large projects, as they make the code easier to understand and maintain over time.

## In Short:
TypeScript is like a safer version of JavaScript. It helps us write cleaner, more reliable code by allowing us to define what types of values our variables can hold. It improves the development experience with better error checking and better support from development tools.

## Type in TypeScript
A type is a way to define the kind of data a variable can hold. It helps us tell TypeScript what kind of value we expect a variable, parameter, or return value to have. It’s like saying, “this can only be a number, string, or something else.”

Example:
```typescript
type Person = {
  name: string;
  age: number;
};

const john: Person = {
  name: 'John',
  age: 30
};
```
In this example, the Person type ensures that any object of type Person must have a name that is a string and an age that is a number.

## Interface in TypeScript
An interface is very similar to a type, but it’s typically used to define the structure of objects and can be extended (or inherited) by other interfaces. It’s like a blueprint for objects.

Example:
```typescript
interface Person {
  name: string;
  age: number;
}

const jane: Person = {
  name: 'Jane',
  age: 28
};
```
Here, we are defining a Person interface, which is exactly like the type example above. Interfaces are often preferred when working with objects because they can be extended or modified later.

## ReactNode
In React, ReactNode represents anything that can be rendered in React, including numbers, strings, JSX elements, arrays, or fragments. It is a type that covers all possible React children.

Example:
```typescript
import React from 'react';

type MyComponentProps = {
  children: React.ReactNode;
};

const MyComponent: React.FC<MyComponentProps> = ({ children }) => {
  return <div>{children}</div>;
};

// Usage:
<MyComponent>
  <p>Hello, world!</p>
</MyComponent>
```

In this example, children can be anything that is a valid React element, including a string ('Hello'), a number (123), or JSX elements like `<p>`Hello`</p>`. Using ReactNode makes sure that the children prop can accept any valid React content.


# Exercise 1

# Component Props Typing

## Objective

In this exercise, we'll practice typing props for a React component using TypeScript. we will create a simple `Button` component with typed props and then use it within a parent component.

## Instructions

_Step 1: Create the Button Component_
1. Create new file named `Button.tsx` inthe `src` directory.
2. Define `Button` component that accepts the following props:
    - `label`: A string to display as the button’s text.
    - `OnClick`: A function that gets called when the button is clicked.
    - `disabled`: A boolean to indicate if the button is disabled.

_Step 2: Use the `Button` Component_
1. Open `App.tsx` (or create a new component)
2. import and use the `Button` component, passing the appropriate props.

_Step 3: Verify Our Types._
1. Make sure our TypeScript compiler is not showing any type errors.
2. Test the buttons in the browser to ensure they work as expected:
    - The first button should display “Click Me” and show an alert when clicked.
    - The second button should be disabled and should not trigger the alert.

