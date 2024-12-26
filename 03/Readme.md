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

## Component Props Typing

### Objective

In this exercise, we'll practice typing props for a React component using TypeScript. we will create a simple `Button` component with typed props and then use it within a parent component.

### Instructions

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


# Exercise 2

## Reusable Props Typing

### Objective

In this exercise, we'll practice creating reusable prop types in TypeScript. we will define a set of reusable props for different types of user information and then apply the to multiple React companents.

### Instructions

_Step 1: Define Reusable Types_
1. Create a file named `types.ts` in the `src` directory.
2. Define a base `Info` type and an extended `AdminInfoList` type in `types.ts`:
  - `Info` Type: This type represents the base information shared by all users. It includes essential properties that any user will have like (id, name, email).

_Step 2: Create UserInfo Component_
1. Create a new file named `UserInfo.tsx` in the `src` directory.
2. Create a `UserInfo` component that displays user information based on the `Info` type:

_Step 3: Create AdminInfo Component_
1. Create a new file named `AdminInfo.tsx` in the `src` directory.
2. Create an AdminInfo component that displays user information and additional admin details based on the AdminInfoList type:

_Step 5: Use the Components in `App`_
1. Open `App.tsx` (or create a new component)
2. Import and use the `UserInfo` and `AdminInfo` components, passing the appropriate props.

# Exercise 3

## Typing the useState Hook

### Objective

In this exercise, you'll practice typing the `useState` hook in TypeScript. You will define state types for various use cases and apply them in functional components to ensure type safety and clarity.

### Instructions

_Step 1: Basic `useState` Typing_
  1. Open `App.tsx` (or create a new component if you prefer).
  2. Define a state variable with `useState` and type it explicitly.

_Step 2: Typing Complex State_
  1. Create a new file named `UserProfile.tsx` in the `src` directory.
  2. Define a state variable that holds an object with user profile information and type it accordingly:

_Step 3: Typing State with Arrays_
  1. Create a new file named `TodoList.tsx` in the `src` directory.
  2. Define a state variable for a list of to-do items and type it accordingly:


# 1. Non-null Assertion Operator (!)

### What is it?

The non-null assertion operator (!) is used in TypeScript to assert that a value is not null or undefined at a specific point in the code, even if TypeScript cannot guarantee it. When we use !, we are telling TypeScript, "I know this value is not null or undefined here, so don't check it."

### How does it work?

The non-null assertion operator removes null and undefined from the type of the expression it's used on, essentially informing TypeScript that the value will not be null or undefined, even though it might be in some situations.

# 2. Optional Chaining Operator (?.)

### What is it?

The optional chaining operator (?.) is used in JavaScript and TypeScript to safely access properties or methods of an object that might be null or undefined, without throwing an error. If a value is null or undefined, the expression short-circuits and returns undefined instead of throwing an error.

### How does it work?
The optional chaining operator allows us to safely access properties or methods of objects that might not exist. If the left-hand side of the operator is null or undefined, the entire expression will evaluate to undefined, rather than throwing a runtime error.


# Dynamic Property Names in Objects

The `[anything]` syntax is a feature of computed property names in JavaScript (and TypeScript). It allows us to use an expression to dynamically define the property name of an object.

When we use `[anything]`, JavaScript evaluates the expression inside the brackets and uses the result as the key for the object.
This is useful when we need to set the property name based on a variable or some computation.

# Exercise 4

### Typing useRef, Forms, and Events

### Objective

In this exercise, we will practice typing React hooks such as useRef, handling forms, and typing events in TypeScript. We will create components that utilize these concepts with proper type annotations.

### Instructions

_Step 1: Typing useRef_
1. Create a file named FocusInput.tsx in the src directory.
2. Define a component that uses useRef to focus an input field when a button is clicked. Type the ref appropriately.

_Step 2: Typing Forms_
1. Create a file named ContactForm.tsx in the src directory.
2. Define a form component with typed state and form handlers.

_Step 3: Typing Events_
1. Create a file named EventHandling.tsx in the src directory.
2. Define a component that demonstrates typing different event handlers.

