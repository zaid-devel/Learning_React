React is a free and open-source JavaScript library specially designed for building user interfaces (UIs) -- React Offical Site

Open Source: Being open source means that React's source code is freely available for anyone to use, modify, and contribute to.

_Library: A library is a set of pre-written code that helps developers do common tasks more easily. Instead of writing code from scratch, they can use functions from the library.

--> Developed By Facebook 2011

--> use Components Model

--> Build modular apps

--> Learn Once, Write Aywhere

# React is the most popular, powerfull front-end library developed and sponsored by Facebook.

# A component is a piece of UI that has it's own logic and appearance. A component can be small as a button or large as entire page.

- Exercise 1: Rendering Multiple Components and Nesting Components

In this exercise, we will learn how to create multiple components and render one component inside another.

*| Step 1: Create a Header Component*
    1. Create a new file called Header.jsx.
    2. Inside this file, create a functional component named Header.
    3. The Header component should return a <header> relement with the following:
        * A <h1> element with the text "Welcome to my Website!"
        * A <nav> element containing three links (<a>) with the text "Home", "About", and "Contact".

*| Step 2: Create a Footer Component*
    1. Create a new file called Footer.jsx.
    2. Inside this file, create a functional component named Footer.
    3. The Footer component should return a <footer> element with a <p> containing the text "@ 2024 My Website"

*| Step 3: Create MainContent Component*
    1. Create a new file called MainContent.jsx.
    2. Inside this file, create a functional component named MainContent.
    3. The MainContent component should return a <main> element containing:
        * A <h2> element with the text "Main Content".
        * A <p> element with any text of your choice.

*| Step 4: Render Component inside App.jsx*
    1. In App.jsx file, import the Header, MainContent, and Footer components:
        * import Header from "./Header";
        * import MainContent from "./MainContent";
        * import Footer from "./Footer";

    2. Inside the App component's return statement, render the three components inside a single <div>, in the following order:
        * Header
        * MainContent
        * Footer
    Our App.jsx should look like this:
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


- Exercise 2: Rendering Multiple Components and Nesting Components

In this exercise, we will practice basic JSX code and rendering it in a React app.

*| Step 1: Create a New Component*
    1. Create a file called WelcomeMessage.jsx.
    2. Inside this file, write a functional component called WelcomeMessage.
    3. The component should return a <div> that contains:
        * A <h1> element that display the message: "Heyy, World!"
        * A <p> element that display the message: "Welcome to learning JSX!"

*| Step 2: Render the Component in App.jsx*
    1. Open the App.jsx file.
    2. Import the WelcomeMessage Component at the top of the file.
    3. Inside the App component's return statement, render it to the DOM.

*| Step 2: Run the Application*
    1. Run the app
    2. We should see the "Hello World!" message along with "Welcome to learning JSX!" displayed in your browser.


- Exercise 3: JSX Rules Exercise

*| Step 1: Create a New Component*
    1. Create a new file called JSXRules.jsx.
    2. Inside this file, Write a functional component called JSXRules.

The component should return a <div> containing the following:
    * A <h1> element with the text "JSX Rules".
    * A paragraph (<p>) that list atleast three rules of JSX:
        - JSX must return a single parent element.
        - JSX element must return a single parent element.
        - JSX attributes are written using camelCase (e.g., className instead of class).


# { Expressions in JSX }

With JSX we can write expressions inside curly braces. The expressions can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result

For Example:
const app = () => {
    return <p>2 + 2</p> // will return 2+2
}
but
const  app = () => {
    return <p>{2 + 2}</p> // will return 4
}


- Exercise 4: JSX Rules Exercise

*| Step 1: Create a New Component*
    1. Create a Greeting Component
    2. Inside this file, create a functional component named Greeting.
    3. The Greeting component should return a <div> containing:
        * A <h1> element that dynamically displays a greeting message.
        * A <p> element that dynamically displays the current date.
    4. Use JavaScript expressions inside {} to dynamically render the following:
        * A name variable containing a name, such as "Bunty"
        * A new Date() object to display the current date.

*| Step 2: Create a ProductInfo Component*
    1. Create a new file called ProductInfo.jsx.
    2. Inside this file, create a functional component named ProductInfo.
    3. The ProductInfo component should return a <div> that dynamically displays product details:
        * Use a product object that contains the following properties:
            - name: "Laptop",
            - price: "$500",
            - availability: "In stock"
    4. Display the product name, price, and availability using {}.

*| Step 3: Render Components in App.jsx*
    1. In App.jsx file, import the Greeting and ProductInfo components
    2. Inside the App component's return statement, render both components.



# Lists

In React, we will render lists with some type of loop. The JavaScript map() array method is generally the preferred method.