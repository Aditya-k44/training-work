// // next topic is ref and forwardRef in react, we will learn how to use ref to access DOM elements and 
// // how to use forwardRef to pass refs to child components.


// import React, { useRef, forwardRef } from 'react';

// const ChildComponent = forwardRef((props, ref) => {
//   return <input ref={ref} type="text" placeholder="Enter text" />;
// });

// const Demo = () => {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     if (inputRef.current) {
//       alert(`Input value: ${inputRef.current.value}`);
//     }
//   };

//   return (
//     <div>
//       <ChildComponent ref={inputRef} />
//       <button onClick={handleClick}>Show Input Value</button>
//     </div>
//   );
// };

// export default Demo;


// // Now the next topic is about form handling in React, we will learn how to manage form state and 
// // handle form submissions in React. We will also learn about controlled and uncontrolled components in React forms.
// //   below is an example of a simple form handling in React using controlled components.

// import React, { useState } from 'react';

// const FormDemo = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Name: ${formData.name}, Email: ${formData.email}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Name"
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//       />
//       <button type="submit  ">Submit</button>
//     </form>
//   );
// };

// export default FormDemo;

// // this example demonstrates how to use controlled components in React forms. 
// // The form data is managed using the `useState` hook, and the input fields are controlled by the 
// // component's state. When the form is submitted, the current values of the input fields are displayed in an alert.  
// // Next, we will learn about uncontrolled components in React forms, which allow us to access form values directly 
// // from the DOM using refs. Below is an example of how to use uncontrolled components in React forms.



// // In this example, we use refs to access the values of the input fields directly from the DOM. 
// // When the form is submitted, we retrieve the values using `nameRef.current.value` and `emailRef.current.value` 
// // and display them in an alert. Uncontrolled components can be useful when you want to quickly access form values 
// // without needing to manage state, but they are generally less common than controlled components in React applications.

// import React, { useRef } from 'react';

// const UncontrolledFormDemo = () => {
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         ref={nameRef}
//         placeholder="Name"
//       />
//       <input
//         type="email"
//         ref={emailRef}
//         placeholder="Email"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default UncontrolledFormDemo;


// // the difference between controlled and uncontrolled components in React forms is that controlled components are managed 
// // by React state, while uncontrolled components rely on refs to access form values directly from the DOM. 
// // Controlled components provide better control over form data and are generally recommended for most use cases, 
// // while uncontrolled components can be useful for simple forms or when you want to quickly access form values without 
// // managing state.    
// // 

// // Next, we will learn about form validation in React, which allows us to validate user input and 
// // provide feedback to users when they submit a form. We will learn how to implement form validation 
// // using both controlled and uncontrolled components in React forms.

// // Below is an example of how to implement form validation using controlled components in React forms.

// import React, { useState } from 'react';

// const FormValidationDemo = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) {
//       newErrors.name = 'Name is required';
//     }
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       alert(`Name: ${formData.name}, Email: ${formData.email}`);
//       setErrors({});
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Name"
//       />
//       {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//       />
//       {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormValidationDemo;

// // In this example, we implement form validation by creating a `validate` function that checks the form data for errors. 
// // If there are validation errors, we set the `errors` state to display error messages next to the corresponding input 
// // fields. 
// // If there are no errors, we display the form data in an alert and clear any existing errors. 
// // This approach allows us to provide feedback to users when they submit a form with invalid input. 


// // Now the next topic is about fragments in React, which allow us to group a list of children without adding 
// // extra nodes to the DOM. Below is an example of how to use fragments in React.

// import React from 'react';

// const FragmentDemo = () => {
//   return (
//     <>
//       <h1>Fragment Demo</h1>
//       <p>This is a demo of using fragments in React.</p>
//     </>
//   );
// };

// export default FragmentDemo;

// // In this example, we use the shorthand syntax `<>` and `</>` to create a fragment that wraps the `h1` and `p` elements. 
// // This allows us to group these elements together without adding an extra div or other container element to the DOM. 
// // Fragments are useful for returning multiple elements from a component without introducing unnecessary markup.    


// // Now the next topic is about portals in React, which allow us to render children into a DOM node that 
// // exists outside the DOM hierarchy of the parent component. Below is an example of how to use portals in React.

// import React from 'react';
// import ReactDOM from 'react-dom';

// const PortalDemo = () => {
//   return ReactDOM.createPortal(
//     <div style={{ background: 'lightblue', padding: '20px' }}>
//       <h1>Portal Demo</h1>
//       <p>This is a demo of using portals in React.</p>
//     </div>,
//     document.getElementById('portal-root')
//   );
// };

// export default PortalDemo;

// // In this example, we use `ReactDOM.createPortal` to render the content of the `PortalDemo` component into a 
// // DOM node with the id `portal-root`. 
// // This allows us to render the portal content outside of the parent component's DOM hierarchy, 
// // which can be useful for modals, tooltips, and other UI elements that need to be rendered at a different 
// // location in the DOM.


// // Next topic is pure components in React, which are components that only re-render when their props or state change. 
// // Below is an example of how to create a pure component in React.

// import React, { PureComponent } from 'react';

// class PureComponentDemo extends PureComponent {
//   render() {
//     return (
//       <div>
//         <h1>Pure Component Demo</h1>
//         <p>This is a demo of using pure components in React.</p>
//       </div>
//     );
//   }
// }

// export default PureComponentDemo;

// // In this example, we create a class component that extends `PureComponent`. 
// // This means that the component will only re-render if its props or state change. 
// // If the props and state remain the same, the component will not re-render, which can improve performance 
// // in certain cases. 
// // Pure components are useful when you want to optimize rendering and avoid unnecessary updates to the DOM.


// // next topic is abiut memo in react, which is a higher-order component that allows us to optimize functional 
// // components by memoizing their output. Below is an example of how to use `React.memo` to create a memoized 
// // functional component in React

// import React from 'react';

// const MemoDemo = React.memo(({ name }) => {
//   console.log('Rendering MemoDemo');
//   return (
//     <div>
//       <h1>Memo Demo</h1>
//       <p>Hello, {name}!</p>
//     </div>
//   );
// });

// export default MemoDemo;

// // In this example, we use `React.memo` to create a memoized functional component called `MemoDemo`. 
// // The component will only re-render if the `name` prop changes. 
// // If the `name` prop remains the same, the component will not re-render, which can improve performance 
// // by avoiding unnecessary renders. 
// // Memoization is particularly useful for components that receive complex props or perform expensive calculations, 
// // as it can help to optimize rendering and improve the overall performance of the application.



// // next tipic is about lazy loading in react, which allows us to load components lazily when they are needed, 
// // rather than loading them all at once. Below is an example of how to use `React.lazy` and `Suspense` to implement
// //  lazy loading in React.

// import React, { Suspense } from 'react';

// const LazyComponent = React.lazy(() => import('./LazyComponent'));

// const LazyLoadingDemo = () => {
//   return (
//     <div>
//       <h1>Lazy Loading Demo</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// };

// export default LazyLoadingDemo;

// // In this example, we use `React.lazy` to lazily load the `LazyComponent`. 
// // The `Suspense` component is used to wrap the lazy-loaded component and provide a fallback UI 
// // (in this case, a loading message) while the component is being loaded. 
// // This allows us to optimize the initial load time of our application by only loading components when they are needed, 
// // rather than loading everything upfront. 
// // Lazy loading is particularly useful for large applications with many components, 
// // as it can help to improve performance and reduce the initial load time for users.


// // Now the next topic is about higher order components (HOCs) in React, which are functions that take a 
// // component and return a new component with enhanced functionality. Below is an example of how to create a 
// // higher order component in React.

// import React from 'react';

// const withLogger = (WrappedComponent) => {
//   return (props) => {
//     console.log('Rendering component with props:', props);
//     return <WrappedComponent {...props} />;
//   };
// };

// const MyComponent = ({ name }) => {
//   return <h1>Hello, {name}!</h1>;
// };

// const MyComponentWithLogger = withLogger(MyComponent);

// export default MyComponentWithLogger;

// // In this example, we create a higher order component called `withLogger` that takes a component 
// // as an argument and returns a new component. 
// // The new component logs the props it receives before rendering the wrapped component. 
// // We then use `withLogger` to create a new component called `MyComponentWithLogger`, which is a 
// // version of `MyComponent` that includes logging functionality. 
// // Higher order components are useful for reusing logic across multiple components and can help to  
// // keep your code DRY (Don't Repeat Yourself) by abstracting common functionality into reusable components.


// // Next topic is about render props in React, which is a technique for sharing code between components 
// // using a prop that is a function. Below is an example of how to use render props in React.

// import React from 'react';

// const RenderPropsDemo = ({ render }) => {
//   return (
//     <div>
//       <h1>Render Props Demo</h1>
//       {render()}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <RenderPropsDemo render={() => <p>This is a render prop example.</p>} />
//   );
// };

// export default App;

// // In this example, we create a component called `RenderPropsDemo` that takes a `render` prop, which is a function. 
// // The `render` function is called within the component to render the content. 
// // We then use `RenderPropsDemo` in the `App` component and pass a function that returns a paragraph element 
// // as the `render` prop. 
// // This allows us to share code between components by passing different render functions to the `RenderPropsDemo` 
// // component, making it a flexible way to reuse logic and UI across different parts of our application. 
// // Render props are particularly useful for components that need to share state or behavior without using higher 
// // order components or hooks. 



// // Next topic is about context in React, which allows us to share data across components without having to 
// // pass props down manually at every level. Below is an example of how to use context in React.

// import React, { createContext, useContext } from 'react';

// const MyContext = createContext();

// const ContextDemo = () => {
//   return (
//     <MyContext.Provider value="Hello from context!"> 
//       <ChildComponent />
//     </MyContext.Provider>
//   );
// };

// const ChildComponent = () => {
//   const contextValue = useContext(MyContext);
//   return <p>{contextValue}</p>;
// };

// export default ContextDemo;

// // In this example, we create a context using `createContext` and provide a value using the `Provider` component. 
// // The `ChildComponent` uses the `useContext` hook to access the value from the context and displays it in a paragraph. 
// // This allows us to share data across components without having to pass props down manually at every level, making it 
// // easier to manage state and data in larger applications.




// // Next topic is about HTTP requests in React, which allows us to fetch data from APIs and display it in our components.
// //  Below is an example of how to make HTTP requests in React using the `fetch` API.

// import React, { useState, useEffect } from 'react';

// const HttpRequestDemo = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (<div>
//     <h1>{data.title}</h1>
//     <p>{data.body}</p>
//   </div>);
// };

// export default HttpRequestDemo;

// // In this example, we use the `useEffect` hook to make an HTTP request to a placeholder API when the component mounts. 
// // We manage the loading state, error state, and the fetched data using the `useState` hook. 
// // The component displays a loading message while the request is in progress, an error message if there is an error, 
// // and the fetched data once it is successfully retrieved. 
// // This demonstrates how to handle HTTP requests in React and manage different states associated with fetching data from 
// // an API.
