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
