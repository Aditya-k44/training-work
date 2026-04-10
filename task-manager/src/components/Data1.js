// react is a JavaScript library for building user interfaces. 
// // It allows developers to create reusable UI components and manage the state of their applications efficiently. 
// // React uses a virtual DOM to optimize rendering and improve performance. 
// // It is widely used for building web applications, mobile apps, and even desktop applications. 
// // With its component-based architecture, React promotes modular and maintainable code, 
// // making it a popular choice among developers.

// import React from 'react';

// function Sample() {
//   return (
//     <div>
//       <h1>Hello, this is a sample component!</h1>
//       <p>This component demonstrates the basics of React.</p>
//     </div>
//   );
// }

// export default Sample;

// // Now what we have here is a simple React component called Sample. 
// // It is a functional component that returns a JSX element. 
// // The JSX syntax allows us to write HTML-like code within our JavaScript, 
// // making it easier to create and manage the structure of our UI.

// // In this example, the Sample component renders a div containing an h1 heading and a paragraph. 
// // When this component is used in a React application, it will display the heading and the paragraph on the screen.

// // To use this Sample component in your React application, 
// // you can import it and include it in your JSX like this:

// // import Sample from './Sample';

// function App() {
//   return (
//     <div>
//       <Sample />
//     </div>
//   );
// }

// export default App;

// // This will render the Sample component within the App component, 
// // allowing you to see the content defined in the Sample component on your webpage.

// // Overall, this is a basic example of how to create and use a React component. 
// // You can further enhance this component by adding state, props, and event handlers to 
// // make it more interactive and dynamic. React provides a powerful and flexible way to build user interfaces, 
// // and with practice, you can create complex and feature-rich applications using React.

// // next topic is functional components in React. Functional components are a simpler way to create components in React compared to class components. They are defined as JavaScript functions that return JSX. 
// // Functional components are often preferred for their simplicity and ease of use, especially when you don't need to manage state or lifecycle methods.

// // Here's an example of a functional component in React:

// import React from 'react';

// function Welcome(props) {
//   return <h1>Welcome, {props.name}!</h1>;
// }

// export default Welcome;

// // In this example, we have a functional component called Welcome that takes props as an argument. 
// // The component returns a JSX element that displays a welcome message using the name prop. 
// // You can use this component in your application by importing it and passing the appropriate props, 
// // just like we did with the Sample component earlier.

// // Functional components can also use hooks to manage state and side effects, 
// // making them even more powerful and versatile. 
// // With the introduction of hooks in React 16.8, functional components can now do everything that 
// // class components can do, 
// // while still maintaining their simplicity and readability. 
// // This has led to a shift in the React community towards using functional components as t
// // he preferred way to create components in React.


// // Next topic is default and named exports in React. In JavaScript, you can export values from a module using either default exports or named exports.

// // Default exports allow you to export a single value from a module, and you can import it using any name you choose. 
// // Here's an example of a default export:

// // In Sample.js
// export default function Sample() {
//   return <h1>This is a default export</h1>;
// }

// // In another file
// import Sample from './Sample';

// // Named exports, on the other hand, allow you to export multiple values from a module, 
// // and you must import them using the same names. 
// // Here's an example of named exports:

// // In Sample.js
// export function Sample1() {
//   return <h1>This is a named export 1</h1>;
// }

// export function Sample2() {
//   return <h1>This is a named export 2</h1>;
// }

// // In another file
// import { Sample1, Sample2 } from './Sample';

// // You can also rename named exports when importing them:
// import { Sample1 as MySample1 } from './Sample';

// // Default and named exports can be used together in the same module, 
// // but it's generally recommended to choose one style for consistency. 
// // Default exports are often used when a module has a single main value to export, 
// // while named exports are useful when a module has multiple values to export. 
// // It's important to understand the differences between these two export styles and 
// // use them appropriately in your React applications to maintain clean and organized code.


// // Now the next topic is about jsx in React. JSX, which stands for JavaScript XML, 
// // is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. 
// // It is used in React to describe the structure of the user interface. JSX makes it easier to create and manage 
// // the UI by allowing you to write code that closely resembles HTML, while still being able to use JavaScript 
// // expressions and logic.

// // Here's an example of how to use JSX in a React component:

// import React from 'react';

// function MyComponent() {
//   const name = "John";
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <p>This is a JSX example.</p>
//     </div>
//   );
// }

// export default MyComponent;

// // In this example, we have a functional component called MyComponent that uses JSX to define its structure. 
// // The JSX code is enclosed within parentheses and looks similar to HTML. 
// // We can also include JavaScript expressions within curly braces {} in JSX, as shown with the name variable. 
// // When this component is rendered, it will display "Hello, John!" and "This is a JSX example." on the screen.

// // JSX is not a requirement for using React, but it is widely used because it provides a more intuitive and readable way 
// // to define the UI. 
// // It allows developers to write code that closely resembles the final output, making it easier to understand and maintain. 
// // Additionally, JSX can be transpiled into regular JavaScript using tools like Babel, 
// // allowing you to take advantage of modern JavaScript features while still writing code that is easy to read and understand.  



// // Now next topic is about props in react. Props, short for properties, 
// // are a way to pass data from a parent component to a child component in React. 
// // They allow you to customize and configure the behavior of a component by providing it with specific values. 
// // Props are read-only, meaning that a child component cannot modify the props it receives from its parent.

// // Here's an example of how to use props in React:

// import React from 'react';

// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Greeting name="John" />
//       <Greeting name="Bob" />
//     </div>
//   );
// }

// export default App;

// // In this example, we have a Greeting component that takes a prop called name. 
// // The Greeting component uses this prop to display a personalized greeting message. 
// // In the App component, we render the Greeting component twice, passing different values for the name prop. 
// // When you run this code, it will display "Hello, John!" and "Hello, Bob!" on the screen.

// // Props are a fundamental concept in React and are essential for creating reusable and dynamic components. 
// // They allow you to create components that can be easily customized and reused throughout your application, 
// // making your code more modular and maintainable.


// // Now the next topioc is about state in React. State is a built-in object in React that allows components to 
// // manage and track data that can change over time. It is used to store information that can affect the rendering 
// // of a component and can be updated in response to user interactions or other events. State is mutable, 
// // meaning that it can be changed, and when it changes, React will re-render the component to reflect the new state.

// // Here's an example of how to use state in a functional component using the useState hook:

// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Counter;

// // In this example, we have a Counter component that uses the useState hook to manage a count state variable. 
// // The useState hook takes an initial value (in this case, 0) and returns an array with two elements: 
// // the current state value (count) and a function to update that state (setCount). 
// // The increment function is defined to update the count state by incrementing it by 1. 
// // When the button is clicked, the increment function is called, which updates the count state and 
// // triggers a re-render of the component, displaying the updated count value on the screen.

// // State is a powerful feature in React that allows you to create interactive and dynamic components. 
// // It enables you to manage data that can change over time and respond to user interactions, making 
// // your applications more engaging and responsive. 
// // Understanding how to use state effectively is essential for building robust React applications.



// // Now the next topic is about event handling in React. Event handling in React is a way to respond 
// // to user interactions, such as clicks, form submissions, and keyboard events. React provides a simple 
// // and consistent way to handle events using event handlers, which are functions that are called when a 
// // specific event occurs.

// // Here's an example of how to handle a click event in a React component:

// import React from 'react';

// function ClickButton() {
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <button onClick={handleClick}>Click Me</button>
//   );
// }

// export default ClickButton;

// // In this example, we have a ClickButton component that renders a button. 
// // We define an event handler function called handleClick that will be called when the button is clicked. 
// // The onClick attribute is used to attach the handleClick function to the button's click event. 
// // When the button is clicked, an alert will pop up with the message "Button clicked!".

// // You can also handle other types of events, such as form submissions or keyboard events, by using the 
// // appropriate event attributes (e.g., onSubmit for forms, onKeyDown for keyboard events) and defining 
// // corresponding event handler functions.

// // Event handling in React allows you to create interactive and dynamic user interfaces by responding to user actions. 
// // It is an essential part of building React applications, as it enables you to create engaging and responsive 
// // experiences for your users. 
// // Understanding how to handle events effectively is crucial for creating robust and user-friendly React applications.



// // Now the next topic is about conditional rendering in React. Conditional rendering in React allows you to render different components or elements based on certain conditions. This is useful for creating dynamic user interfaces that can change based on user interactions or other factors.

// // Here's an example of how to implement conditional rendering in a React component:

// import React, { useState } from 'react';

// function UserGreeting() {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting() {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;

// }

// // Alternatively, you can use a ternary operator for a more concise syntax:

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
// }



// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginClick = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogoutClick = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       <Greeting isLoggedIn={isLoggedIn} />
//       {isLoggedIn ? (
//         <button onClick={handleLogoutClick}>Logout</button>
//       ) : (
//         <button onClick={handleLoginClick}>Login</button>
//       )}
//     </div>
//   );
// }

// export default App;

// // In this example, we have two components, UserGreeting and GuestGreeting, that display different messages 
// // based on whether the user is logged in or not. The Greeting component takes a prop called isLoggedIn and 
// // uses it to determine which greeting to render. The App component manages the isLoggedIn state and provides 
// // buttons to toggle between the logged-in and logged-out states. When the user clicks the Login button, the 
// // isLoggedIn state is set to true, and the UserGreeting component is rendered. When the user clicks the Logout button, 
// // the isLoggedIn state is set to false, and the GuestGreeting component is rendered. This demonstrates how conditional 
// // rendering can be used to create dynamic user interfaces in React.  




// // Next topic is about parent child communication in React. In React, parent-child communication refers 
// // to the way components can pass data and interact with each other. This is typically done through props, 
// // which allow a parent component to pass data down to its child components.

// // Here's an example of how parent-child communication works in React:

// import React, { useState } from 'react';

// function ChildComponent(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// function ParentComponent() {
//   const [name, setName] = useState('Alice');

//   const handleChangeName = () => {
//     setName('Bob');
//   };

//   return (
//     <div>
//       <ChildComponent name={name} />
//       <button onClick={handleChangeName}>Change Name</button>
//     </div>
//   );
// }

// export default ParentComponent;

// // In this example, we have a ParentComponent that manages a state variable called name. 
// // The ParentComponent renders a ChildComponent and passes the name state as a prop to it. 
// // The ChildComponent receives the name prop and displays a greeting message using that name. 
// // When the user clicks the "Change Name" button, the handleChangeName function is called, 
// // which updates the name state to "Bob". This causes the ParentComponent to re-render, and 
// // the ChildComponent receives the updated name prop, resulting in the greeting message changing to "Hello, Bob!".

// // This example demonstrates how a parent component can communicate with its child component by passing data through props.
// // The child component can then use that data to render content or perform actions based on it. This is a fundamental 
// // concept in React and is essential for building dynamic and interactive user interfaces.




// // Next topic is about lists and keys in React. In React, when you want to render a list of items, 
// // you can use the map() function to iterate over an array and return a new array of JSX elements. 
// // Each element in the list should have a unique key prop to help React identify which items have changed, 
// // been added, or removed.

// // Here's an example of how to render a list of items with keys in React:

// import React from 'react';

// function ItemList(props) {
//   const items = props.items;
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default ItemList;

// // In this example, we have an ItemList component that takes an array of items as a prop. 
// // We use the map() function to iterate over the items array and return a list item (li) for each item. 
// // Each list item has a key prop that is set to the unique id of the item. 
// // This helps React efficiently update the list when items are added, removed, or changed.

// // When you use keys in a list, it allows React to keep track of each item and optimize rendering by only updating 
// // the items that have changed. 
// // This can improve performance and ensure that your application runs smoothly, especially when dealing with large 
// // lists of data. 
// // It's important to use unique and stable keys for each item in the list to avoid issues with rendering and state 
// // management in React.


// // Array map method syntax:

// const newArray = array.map((element, index, array) => {
//   // Return a new element based on the current element
// });

// // In this syntax, array is the original array you want to iterate over, 
// // and newArray is the new array that will be created by applying the provided function 
// // to each element of the original array. The map() function takes a callback function as an argument, 
// // which is called for each element in the array. The callback function receives three arguments: 
// // the current element being processed (element), the index of the current element (index), 
// // and the original array (array). You can use these arguments to create a new element based on the 
// // current element and return it, which will be added to the new array. 

// // For example, if you have an array of numbers and you want to create a new array with each number doubled, 
// // you can use the map() function like this:

// const numbers = [1, 2, 3, 4];
// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8]

// // In this example, we have an array of numbers and we use the map() function to create a new array called doubledNumbers. 
// // The callback function takes each number from the original array and returns its double, which is then added to the new 
// // array. 
// // The result is an array of doubled numbers.
