# REACT

**React** is a free and open-source JavaScript library specially designed for building user interfaces (UIs)

Open Source: Being open source means that React's source code is freely available for anyone to use, modify, and contribute to.

- Library: A library is a set of pre-written code that helps developers do common tasks more easily. Instead of writing code from scratch, they can use functions from the library.

--> Developed By Facebook 2011

--> use Components Model

--> Build modular apps

--> Learn Once, Write Aywhere

React is the most popular, powerfull front-end library developed and sponsored by Facebook.

A component is a piece of UI that has it's own logic and appearance. A component can be small as a button or large as entire page.

# Exercise 1: Rendering Multiple Components and Nesting Components

In this exercise, we will learn how to create multiple components and render one component inside another.

_| Step 1: Create a Header Component_

1. Create a new file called Header.jsx.
2. Inside this file, create a functional component named Header.
3. The Header component should return a header element with the following:
   - Header element with the text "Welcome to my Website!"
   - Nav element containing three links with the text "Home", "About", and "Contact".

_| Step 2: Create a Footer Component_
1. Create a new file called Footer.jsx.
2. Inside this file, create a functional component named Footer.
3. The Footer component should return a `<footer>` element with a `<p>` containing the text "@ 2024 My Website".

_| Step 3: Create MainContent Component_
1. Create a new file called MainContent.jsx.
2. Inside this file, create a functional component named MainContent.
3. The MainContent component should return a `<main>` element containing:
- `<h2>` element with the text "Main Content".
- `<p>` element with any text of your choice.

_| Step 4: Render Component inside App.jsx_
1. In App.jsx file, import the Header, MainContent, and Footer components:
    - import Header from "./Header";
    - import MainContent from "./MainContent";
    - import Footer from "./Footer";

2. Inside the App component's return statement, render the three components inside a single `<div>`, in the following order:
    - Header
    - MainContent
    - Footer
Our App.jsx should look like this:
```javascript
function App() {
    return (
        <div>
        <Header />
        <MainContent />
        <Footer />
        </div>
    )
}
export default App;
```

# Exercise 2: Rendering Multiple Components and Nesting Components

In this exercise, we will practice basic JSX code and rendering it in a React app.

_| Step 1: Create a New Component_
1. Create a file called WelcomeMessage.jsx.
2. Inside this file, write a functional component called WelcomeMessage.
3. The component should return a `<div>` that contains:
- `<h1>` element that display the message: "Heyy, World!"
- `<p>` element that display the message: "Welcome to learning JSX!"

_| Step 2: Render the Component in App.jsx_
1. Open the App.jsx file.
2. Import the WelcomeMessage Component at the top of the file.
3. Inside the App component's return statement, render it to the DOM.

_| Step 3: Run the Application_ 
1. Run the app 
2. We should see the "Hello World!" message along with "Welcome to learning JSX!" displayed in our browser.

# Exercise 3: JSX Rules Exercise

_| Step 1: Create a New Component_
1. Create a new file called JSXRules.jsx.
2. Inside this file, Write a functional component called JSXRules.

The component should return a `<div>` containing the following:
- `<h1>` element with the text "JSX Rules".
- paragraph (`<p>`) that list atleast three rules of JSX:
  - JSX must return a single parent element.
  - JSX element must return a single parent element.
  - JSX attributes are written using camelCase (e.g., className instead of class).

# { Expressions in JSX }

With JSX we can write expressions inside curly braces. The expressions can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result.

For Example:
```javascript
const app = () => {
return <p>2 + 2</p> // will return 2+2
}
but
const app = () => {
return <p>{2 + 2}</p> // will return 4
}
```

# Exercise 4: JSX Rules Exercise

_| Step 1: Create a New Component_
1. Create a Greeting Component.
2. Inside this file, create a functional component named Greeting.
3. The Greeting component should return a `<div>` containing:
- `<h1>` element that dynamically displays a greeting message.
- `<p>` element that dynamically displays the current date.
4. Use JavaScript expressions inside {} to dynamically render the following:
- name variable containing a name, such as "Bunty"
- new Date() object to display the current date.

_| Step 2: Create a ProductInfo Component_
1. Create a new file called ProductInfo.jsx.
2. Inside this file, create a functional component named ProductInfo.
3. The ProductInfo component should return a `<div>` that dynamically displays product details:
Use a product object that contains the following properties:
- name: "Laptop",
- price: "$500",
- availability: "In stock"
    4. Display the product name, price, and availability using {}.

_| Step 3: Render Components in App.jsx_
1. In App.jsx file, import the Greeting and ProductInfo components
2. Inside the App component's return statement, render both components.

# Lists

In React, we will render lists with some type of loop. The JavaScript map() array method is generally the preferred method.

# Exercise 5: Rendering a List of Data with .map()

In this exercise, we will learn how to render a list of items using the .map() method in JSX.

_| Step 1: Create a UserList Component_
1. Create a new file called UserList.jsx.
2. Inside this file, create a functional component called UserList.
3. In this component, create a user array with the following objects, where each object represent a user with id, name and age:
```javascript
const user = [
    { id: 1, name: 'Alice', age: 25}
    { id: 2, name: 'Bob', age: 30}
    { id: 3, name: 'Charlie', age: 22}
]
```
4. Use the .map() method to render a list of users. Each user's name and age should be displayed inside a `<div>` element. Use the id as the unique key for each list item.

_| Step 2: Create a ProductList Component_
1. Create a new file called ProductList.jsx.
2. inside this file, create a functional component called ProductList.
3. Create a products array with the following objects, where each object represents a product with id, name, and price:
```javascript
const product = [
    {id: 1, name: 'Phone', price: '$600'},
    {id: 2, name: 'Laptop', price: '$1200'},
    {id: 3, name: 'Headphone', price: '$200'},
];
```
4. Use the .map() method to render the list of products. Each product's name and price ahould be displayed inside a `<div>` element. Use the id as the key for each product.

_| Step 3: Render the Component in App.jsx_
1. In App.jsx file, import the UserList and ProductList components:
```javascript
import UserList from "./UserList";
import ProductList from "./ProductList";
```
2. Inside the App component's return statement, render both the UserList and ProductList components:
```javascript
function App() {
    return (
        <div>
        <UserList />
        <ProductList />
        </div>
    );
}
export default App;
```

# PROPS

- Props/ Properties are arguments passed into reeact component.
- Props allows us to pass data from parent component to a child component.
- Props are passed to a component via HTML attributes

Props in React are like inputs or arguments for components. They let you pass data from one component (usually a parent) to another (usually a child).
Props help make components reusable by customizing them with different data.

Example:
```javascript
// App Component

const App = () => {
return (
<User
img="https://media.istockphoto.com/id/1222254034/photo/a-concept-image-of-a-magnifying-glass-isolated-white-background-with-a-word-example-zoom.jpg?s=612x612&w=is&k=20&c=4cRJ1_07g4DQAYQ6CSzuQMdqQ_0Gf0trHUi5LSiuNdw="
name="Example"
age={20}
isLoggedIn={false}
hobbies={["Coding", "Reading", "Sleeping"]}
/>

// User Component

const User = (props) => {
return (

<section>
<img src={props.img} alt={props.name} width={200} />
<h1>Name: {props.name}</h1>
<h2>Age: {props.age}</h2>
<h3>Is Logged in: {props.isLoggedIn}</h3>
<h4>Hobbies: {props.hobbies}</h4>
</section>
)
}
)
}
```
# Exercise 6: Using Props in React Components

In this exercise, we will learn how to pass and use props in react components to make them dynamic and reusable.

_Step 1: Create a Person Component_
1. Create a new file called Person.jsx.
2. Inside this file, create a functional component called Person.
3. This component should accept props and render:
- `<h2>` element that displays the person's name.
- `<p>` element that displays the person's age. 4. Use props.name and props.age to display the dynamic values passed from the parent component.

_Step 2: Create a Product Component_
1. Create a new file called Product.jsx.
2. Inside this file, create a functional component called Product.
3. This component should accept props and render:
- `<h2>` element that displays the products's name.
- `<p>` element that displays the products's price.
4. Use props.name and props.price to display the values passed from the parent component.

_Step 3: Pass Props from App.jsx_
1. In App.jsx file, import the person and product component:
- Pass name and age as props to person component.
- Pass name and price as props to product component.

# Conditional Rendering

Conditional Rendering allows us to dynamically display different UI components or content based on specific conditions. This enables us to create more interactve and responsive user experiences.

Conditional rendering in React means showing different content or components based on a condition, like if-else in JavaScript.

Example 1:
```javascript
function Greeting(props) {
if (props.isLoggedIn) {
return <h1>Welcome back!</h1>;
} else {
return <h1>Please sign in.</h1>;
}
}
```

How it works:

If `isLoggedIn` is true, it shows "`Welcome back!`"
If `isLoggedIn` is false, it shows "`Please sign in.`"
You use conditional rendering when you want your app to show different things depending on certain conditions (like login status, user actions, etc.).

Example 2:
```javascript
const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({isValid}) => {

    // if(isValid) {
    //     return <ValidPassowrd />;
    // }
    // return <InvalidPassword />;

    return isValid ? <ValidPassowrd /> : <InvalidPassword />;

};

const App = () => {
return <Password isValid={true}/ >;
};
```

Example 3:
```javascript
const Cart = () => {
const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"]
return (
<>
<h1> Cart 🛒 </h1>
{items.length > 0 && <h2> You have {items.length} items in your Cart.</h2>}

        <ul>
            <h4> 👇 Products </h4>
            {items.map((item) => (
                <li key={Math.random()}>{item}</li>
            ))}
        </ul>
    </>

)
};
```

# Exercise 7: Conditional Rendering in React

In this exercise, we will practice different ways to render JSX conditionally in React components.

_Step 1: Create a Weather Component with if, else if, and else_ 
1. Create a new file called Weather.jsx.
2. Inside this file, create a functional component called Weather.
3. The component should:
- Take a temperature prop.
- Use if, else if and else statements to conditionally render different messages based on the temperature value.
  - if the temperature is below 15, display: "It's cold outside!"
  - if the temperature is between 15 and 25, display: "It's nice outside!"
  - if the temperature is above 25, display: "It's hot outside!"

_Step 2: Create a UserStatus Component with && Operator_
1. Create a new file called UserStatus.jsx.
2. Inside this file, create a functional component called UserStatus.
3. The component should:
- Take two boolean props loggedIn, isAdmin.
- Use the && Operator to display a message for Admin and Normal User:
- If loggedIn is true and Admin display: "Welcome Admin!"
- If it's just loggedIn and not Admin then display "Welcome User".

_Step 3: Create a Greeting Component with a Ternary Operator_
1. Create a new file called Greeting.jsx.
2. Inside this file, create a functional component called Greeting.
3. The component should:
- Take a timeOfDay prop (e.g., "morning","afternoon").
- Use the ternary operator to condiionally display greeting based on the time of day:
  - If timeOfDay is "morning" display: "Good Morning!".
  - If timeOfDay is "afternoon" display: "Good Afternoon!".

_Step 4: Render the component in App.jsx_
1. In App.jsx file, import the weather, UserStatus, and Greeting Components.
2. Inside the App Component, render each component with different props to test the conditional rendering logic.

Example:
```javascript
    functional App() {
        return (
            <div>
            <h1>Conditional Rendering in React</h1>

            {/* Weather Component */}
            <Weather temperature = {10}/>
            <Weather temperature = {20}/>
            <Weather temperature = {30}/>

            {/* UserStatus Component */}
            <UserStatus loggedIn = {true}/>
            <UserStatus loggedIn = {false}/>

            {/* Greeting Component */}
            <Greeting timeOfDay = "morning"/>
            <Greeting timeOfDay = "afternoon"/>
            <Greeting timeOfDay = "evening"/>
            <Greeting/>
            </div>
        )
    }
```

# Exercise 8: Styling Components in React

In this exercise, we will learn how to apply styles using different methods in react Components, including inline styles, style objects, and React icons.

_Step 1: Create a StyleCard Component with Inline Styles_
1. Create a new file called StyleCard.jsx.
2. Inside this file, create a functional component called StyleCard.
3. Use Inline styles to style the component:
- Set the background color to light blue.
- Set padding to 20px.
- Set border radius to 10px.
- Set text color to dark blue.
4. Render a `<div>` with a title and description inside it.

_Step 2: Create a ProfileCard Component with Separate Style Object_
1. Create a new file called ProfileCard.jsx.
2. Inside this file, create a functional component called ProfileCard.
3. Define a styles object to hold the CSS properties:
- Set the background color to light gray.
- Set padding to 15px.
- Set border radius to 8px.
- Set text color to dark black.
4. Apply the styles object to the `<div>` using the style attribute.
5. Render a `<div>` with a title and description inside it.

_Step 3: Create a IconComponent Using React Icons_
1. Install react-icons if you haven't already:
```terminal
npm install react-icons
```
2. Create a new file called IconComponent called IconComponent.
3. Inside this file, create a functional component called IconComponent:
4. Import an icon from react-icons, such as FaBeer from react-icons/fa
5. Style the icon using inline styles:
    - Set the font size to 38px
    - Set the color to gold
6. Render the icon with a title.

_Step 4: Render All Components in App. jsx_
1. In your App.jsx file, import the StyledCard, ProfileCard, and IconComponent components:
2. Inside the App component, render all three components:
```javascript
function App() {
    return (
        <div>
            <StyledCard />
            <ProfileCard />
            <IconComponent />
        </div>
    );
}
export default App;
```
# State and Hooks

## State

State is a way to store and manage data that can change over time and affects how the component renders. We define state using the useState Hook, which allows us to set an initial value and provides a way to update that state.

## Hooks

Hooks are a new addition in React 16.8. They let us use state and other react features without writing a class.

### useState() Hook:
useState Hook allows us to **track state** in a functional component. State generally refers to data or properties that need to be tracking in an application.

![useState](https://i.ibb.co/t39VDJg/Screenshot-2024-11-14-212624.png)


# Exercise 9: Mastering useState in React

this exercise, we learn how to use the useState hook for managing state in various scenarios, including basic usage, arrays, objects, and array of objects.

_Step 1: Basic Usage of useState_

1. Create a new file called Counter.jsx
2. Inside this file, create a functional component called Counter.
3. Use useState to manage a simple counter state.
    - Initialize the state with a value of 0.
    - Create a button to increment the counter by 1 when clicked.
    - Display the current value of the counter.

_Step 2: useState with an Array of Data_
1. Create a new fle called TodoList.jsx
2. Inside this file, create a functional component called TodoList.
3. Use useState to manage an array of todo items.
    - Initialize the state with an empty array.
    - Create a form to add new todo items to the list.
    - Display the list of todo items.

_Step 3: useState with an Object of Data_
1. Create a new file called Profile.jsx
2. Inside this file, create a functional component called Profile.
3. Use useState to manage an object with user profile information.
    - Initialize the state with an object containing name and age.
    - Provide input fields to update the name and age.
    - Display the updated profile information.

_Step 4: useState with an Array of Objects_
1. Create a new file called ShoppingList.jsx.
2. Inside this file, create a functional component called ShoppingList.
3. Use useState to manage an array of objects, where each object represents a shopping item with name and quantity.
    - Initialize the state with an empty array.
    - Create a form to add new items to the list.
    - Display the list of shopping items.

_Step 5: Render All Components in App.jsx_
1. In App.jsx file, import the Counter, TodoList, Profile, and ShoppingList components:
```javascript
import Counter from "./Counter";
import TodoList from "./TodoList";
import Profile from "./Profile";
import ShoppingList fron "./Shoppinglist";
```
2. Inside the App component, render all four components:
```javascript
function App() {
return (
<div>
<h1>React useState Examples</h1>
<Counter />
<TodoList />
<Profile />
<ShoppingList />
</div>
);
}
export default App;
```

# Portal

A Portal in React lets us render a child component outside the usual structure of the parent component. Normally, React renders child components inside the parent, but with a portal, we can place them anywhere in the DOM, even outside of the parent component’s hierarchy.

This is helpful in cases where we need to display things like:

- Modals (pop-up windows)
- Tooltips (small help messages)
- Dropdowns (lists that appear when clicking a button)

These UI elements often need to appear above or outside the regular layout, and a portal allows us to do that without changing how the components are structured in React.

# useEffect()

useEffect is a hook in React that lets us run some code when certain things happen in our component. It’s like saying, "Hey, React, when this happens, do something for us."

## 1. Running code after rendering
useEffect runs after every time our component renders. It’s useful for tasks like fetching data or updating the DOM.
Example:
```javascript
useEffect(() => {
  console.log('This runs after the component renders');
});
```
## 2. Run code when certain things change
We can tell useEffect to only run when specific data changes. This is done by passing a list of values (called "dependencies").

Example:

```javascript
useEffect(() => {
  console.log('This runs only when "count" changes');
}, [count]); // "count" is the dependency
```
In this case, useEffect runs only when the count variable changes.

## 3. Clean up after ourselves
If our effect creates something (like an API request or a timer), we might want to clean it up when the component is removed or before the effect runs again. We can do that by returning a function inside useEffect.

Example:

```javascript
useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);
  
  // Clean up function
  return () => clearInterval(timer); // This runs when the component unmounts or effect changes
}, []); // Empty array means it runs only once when the component is mounted
```
### In summary:
- Without dependencies: Runs after every render.
- With dependencies: Runs only when the dependencies change.
- Clean up: We can return a function inside useEffect to clean up after our effect.

### Note:
In React, hooks like useState, useEffect, and others must be used at the top level of a component, unconditionally. This means we cannot call hooks inside conditional statements, loops, or nested functions. React enforces this rule to ensure hooks are called in the same order on every render, which is critical for React to track state and effects correctly.

1. Incorrect Example (Hook inside a conditional):

```javascript
import React, { useState } from 'react';

function MyComponent() {
  if (true) {
    const [count, setCount] = useState(0);  // This is incorrect!
  }

  return <div>Count: {count}</div>;
}
```
- Why it's wrong:

useState is called conditionally inside if (true).
This means React might not call the hook every time the component renders, causing errors.


2. Correct Example (Hook outside conditionals):

```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);  // Hook called unconditionally

  if (count > 0) {
    return <div>Count is greater than 0</div>;
  }

  return <div>Count is 0</div>;
}
```

- Why it's correct:

useState is called unconditionally at the top level of the component.
We use a conditional (if (count > 0)) to decide what to display, but not to control the hook.


# Exercise 10: Understanding useEffect in React

In this exercise, we'll practice using the `useEFfect` hook in different scenarios, including fetching data, handling side effects.

_Step 1: Basic Usage of useEffect_
1. Create a new file called BasicEffect.jsx
2. Inside this file, create a functional component called BasicEffect.
3. Use useEffect to log a message to the console whenever the component mounts (i.e, when it's rendered the first time).

_Step 2: UseEffect with Dependencies_
1. Create a new file called CounterEffect.jsx
2. Inside this file, create a functional component called CounterEffect.
3. Use useEffect to update the document title whenever a counter value changes.
    - Initialize a count state with 0 using useState.
    - Render a button that increments the count.
    - Use useEffect to update the document ttle whenever count changes.

_Step 3: useEffect for Fetching Data_
1. Create a new file called FetchDataEffect.jsx
2. Inside this file, create a functional component called FetchDataEffect
3. Use useEffect to fetch data from an API when the component mounts.
    - Use the API endpoint [https: // jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts) to fetch some data.
    - Store the data in a state variable and display the title of the first post.


# Prop Drilling

Prop drilling is a term in React that refers to the process of passing data from a parent component to a deeply nested child component through multiple levels of intermediate components.

Simple Explanation:
Imagine we have a component structure like this:

```
Parent
  └── Child1
        └── Child2
              └── Child3
```

Prop drilling happens when we need to pass data from the Parent component to Child3, but instead of passing the data directly from Parent to Child3, we have to pass it through Child1 and Child2 first.

Example:
Let’s say the Parent component has a piece of state, and we want to pass it to Child3.

```js
function Parent() {
  const [message, setMessage] = useState("Hello from Parent!");

  return (
    <div>
      <Child1 message={message} />
    </div>
  );
}

function Child1({ message }) {
  return (
    <div>
      <Child2 message={message} />
    </div>
  );
}

function Child2({ message }) {
  return (
    <div>
      <Child3 message={message} />
    </div>
  );
}

function Child3({ message }) {
  return <h1>{message}</h1>;
}
```

## How Prop Drilling Works:

- The Parent component has the state message.
- Parent passes message to Child1 as a prop.
- Child1 passes it down to Child2.
- Child2 then passes it down to Child3.
- Finally, Child3 displays the message.

## Problem with Prop Drilling:

If we have a lot of nested components, we might need to pass data through many layers, even if some of the intermediate components don’t need it.
This can make the code harder to maintain and understand because we're passing props that aren’t directly used by all components in the chain.

## What Happens if We Don't Pass Props?
If we don’t pass the `message` from `Parent` to `Child1`, and from `Child1` to `Child2`, `Child3` will never get access to the `message` prop. Each component only gets the props that are directly passed to it, and it can’t access props from its parent or from any other component unless they are passed down.

For example:
```javascript
function Parent() {
  const message = "Hello from Parent!";
  return <Child1 message={message} />;
}

function Child1() {  
  // Missing the message prop here
  return <Child2 />;  // It won't receive the message prop, hence cannot pass it down
}

function Child2() {
  return <Child3 />;  // Same problem here
}

function Child3() {
  return <h1>{message}</h1>;  // This will throw an error because 'message' is not passed to Child3
}
```

## How to Solve Prop Drilling:

We can avoid prop drilling by using React Context or state management libraries like Redux to directly provide the data to any component in the tree without passing it through each level.

## Key Points:

- Prop drilling happens when data is passed from a parent component to deeply nested child components, often through intermediate components that don’t need the data.
- While simple, prop drilling can become a problem when we have many layers of components or need to share data at multiple levels.
- It’s a common challenge in React applications, but solutions like Context API or Redux can help manage this.


# What is the Context API in React?

The Context API in React allows us to share state or values across components without having to pass props through each level of the component tree. It helps solve the problem of prop drilling, where we have to pass data down to deeply nested components through intermediate layers.

## How Does the Context API Work?

The Context API consists of three main parts:
1. `React.createContext()` — This creates the context object.
2. `Provider` — This makes the context available to all components that need it.
3. `Consumer` — This is used to access the context value inside a component.

## Step-by-Step Explanation:

1. Creating Context:
- We first create a context object using `React.createContext()`. This object will hold the data we want to share.
```javascript
const MyContext = React.createContext();
```

2. Providing Context:
- The `Provider` component allows us to make the context available to components. We wrap our components in the `Provider` and pass the data we want to share through the `value` prop.
```javascript
<MyContext.Provider value={someData}>
  <App />
</MyContext.Provider>
```

3. Consuming Context:
- Any component inside the Provider can access the shared data through the context.
Using `useContext` in a functional component:

```javascript
const data = useContext(MyContext);
```

Using `MyContext.Consumer`:

```javascript
<MyContext.Consumer>
  {value => <div>{value}</div>}
</MyContext.Consumer>
```

## When to Use the Context API?

1. When we have global data that many components need to access (e.g., user authentication, theme, language).
2. When prop drilling becomes difficult because we have many nested components and we don’t want to pass data through each level.
3. For simple state management in small or medium-sized applications.

## Limitations of Context API:

1. Performance Considerations:
  - Context updates cause all consuming components to re-render. If our context value changes frequently, it may cause unnecessary re-renders and affect performance.

2. Not a Replacement for All State Management:
  - While great for sharing global data, Context is not a full-fledged state management solution like Redux. For complex or large-scale state management, Redux or other state libraries may be a better fit.

While the Context API is a powerful tool for sharing state across components, it comes with certain challenges that can cause problems in specific situations. Here are the key issues and an example to illustrate them:

```javascript
import { Data, Data1 } from "../App";

const ComponentC = () => {
  return (
    <Data.Consumer>
      {(name) => {
        //return <h1>{name}</h1>
        return (
          <Data.Consumer>
            {(age) => {
              return<h1>My name is {name} and I'm {age} years old.</h1> // we have to return it because we are using curly braces
            }}
          </Data.Consumer>
        )
      }}
    </Data.Consumer>
  )
}
```

### The Problem:  
In this code, we are using `Data.Consumer` and `Data1.Consumer` to access values from two different context providers. This works, but it can be a bit complicated, especially if we need to access many pieces of data or if the component tree becomes bigger.

### The Solution: `useContext` Hook
Instead of using Consumer components, we can use the useContext hook, which makes everything much simpler.

### Refactored Code
We can replace the multiple Consumer components with the useContext hook. Here's how:

```javascript
import React, { useContext } from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
  // Get values from the context using useContext hook
  const name = useContext(Data);  // This gives us the value from 'Data' context
  const age = useContext(Data1);  // This gives us the value from 'Data1' context

  return (
    <h1>My name is {name} and I'm {age} years old</h1>
  );
};

export default ComponentC;
```
So, instead of wrapping everything in multiple Consumer components, we use useContext to directly access the data from the context. It’s a simpler and cleaner way to work with context in React!


# Exercise 11: Using Context and useContext in React

In this exercise, we wil learn how to:
- Create a Context.
- Use `useContext` to access data from the Context.
- Share state and functions between components without using props.

_Step 1: Creating a Context_
  1. Create a new fle called `UserContext.jsx`.
  2. Inside this file, create a `UserContext` and a `UserProvider` component that will hold the shared state.

_Step 2: Using `useContext` in Components_
  1. Create a new fle called `UserProfile.jsx`.
  2. Inside this file, create a functional component called `UserProfiLe`. This component will access the user data from `UsenContext` using the `UseContext` hook.

_Step 3: Updating Context Data_
  1. Create a new file called `UpdateUser.jsx`.
  2. Inside this file, create a functional component called `UpdateUser` that allows the user to update their name.


# useReducer()

`useReducer()` is a hook that is similar to `useState()`, but it is designed for more complex state objects or state transitions that involves multiple sub-values. It allows us to manage state in a functional, immutable(unchangeable) way.
It works similarly to `useState()`, but instead of updating state directly with a value, it updates state by dispatching actions that describe how to change the state. It's useful for cases where you need to handle complex state updates like counters, lists, or managing multiple properties in an object.

## How Does `useReducer()` Work?

It uses two key things:
1. State: The current state value.
2. Dispatch: A function that is used to send actions to the reducer to update the state.

### Basic Syntax

``` javascript
const [state, dispatch] = useReducer(reducer, initialState);
```
  - `reducer`: A function that determines how the state should change based on the action received.
  - `initialState`: The starting value of the state.

![Syntax](https://i.ibb.co/C6prhJc/Screenshot-2024-11-25-221048.png)

### The Reducer Function

The reducer function receives two arguments:
1. state: The current state.
2. action: An object that describes what happened, usually with a `type` property and an optional `payload` (additional data).
It then returns a new state based on the action type.

### Simple Example: Counter

Let's walk through a simple example of a counter to better understand `useReducer()`.
1. Initial State: We'll start with a counter value of 0.
2. Actions: We’ll create actions to increase and decrease the counter.

### Step 1: Define the Reducer

The reducer will handle the logic of how to update the counter state based on the action type.

```javascript
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

### Step 2: Use `useReducer()` in the Component

Now we can use the `useReducer()` hook in the component.

```javascript
import React, { useReducer } from 'react';

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
    </div>
  );
}

export default Counter;
```

### Step 3: How It Works
- `state.count`: Displays the current counter value.
- `dispatch({ type: 'increment' })`: When the "Increase" button is clicked, it sends an action with `type: 'increment'`, and the reducer will update the state by increasing the `count` by 1.
- `dispatch({ type: 'decrement' })`: Similarly, the "Decrease" button sends an action with `type: 'decrement'`, which will decrease the `count`.

### Comparison with useState()

- `useState()` is great for simple state, like a single value or toggle.
- `useReducer()` is better for complex state transitions, where multiple actions can change state in different ways (like a counter that can be incremented or decremented, or a form with multiple fields).

### When to Use `useReducer()`

- When we have complex state logic.
- When we want better control over how state updates happen.
- When state updates depend on previous states (for example, using counters, lists, or more complex forms).


# Exercise 12: Using useReducer in React

In this exercise, we will learn how to:
- Define a reducer function to manage state logic.
- Use the `useReducer()` hook to manage complex state in a React component.
- Dispatch actions to update state.


_Step 1: Setting Up the Reducer Function_
1. Create a new file called `counterReducer.jsx`.
2. Inside this file, define a reducer function that will manage a simple counters state.

_Step 2: Using `useReducer` Hook_
1. Create a new file called `Counter.jsx`.
2. inside this file, create a functional component called `Counter`.
3. Use the `useReducer` hook to manage the state of the counter.

_Step 3: Extending the Reducer with More Actions_
1. Modify the `countenReducer.jsx` file to add more actions for increasing and decreasing by a specific amount.

_Step 4: Using Payloads in Actions_
1. Update the `Counter. jsx` fle to allow the user to increase or decrease the count by a specific value using an input feld.

_Step 5: Rendering the Counter in `App.jsx`_
1. In our `App.jsx` file, import and render the `Counter` component.
```javascript
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>React useReducer Example</h1>
      <Counter />
    </div>
  );
}
export default App;
```