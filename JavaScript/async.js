// async and await are syntactic sugar built on top of Promises, 
// providing a more concise and readable way to handle asynchronous code. 
// They allow you to write asynchronous code that looks synchronous, 
// making it easier to understand and maintain.

// the async and awite syntax are written like this:

async function functionName() {
  // Asynchronous code goes here
}

async function example() {
  try {
    const result = await someAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}   


// Here's an example of how to use async and await:

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Data fetched from server";
      resolve(data);
    }, 2000);
  });
}

async function main() {
  try {
    const message = await fetchData();
    console.log(message); // Output: Data fetched from server (after 2 seconds)
  } catch (error) {
    console.error(error);
  }
}

main();

// In this example, the fetchData function returns a Promise that simulates fetching data from a server. 
// The main function is declared as async, allowing us to use the await keyword to wait for,
// the Promise to resolve before proceeding. This makes the code easier to read and understand, 
// as it avoids the need for chaining .then() methods.

// Using async and await can help you write cleaner and more maintainable code when dealing with 
// asynchronous operations, as it allows you to write code that is easier to read and understand, 
// while still providing the benefits of Promises for error handling and chaining multiple asynchronous 
// operations together.


// with async and await the promise that we have in the previous example can be rewritten like this:

async function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data1 = "Data 1";
      resolve(data1);
    }, 1000);
  });
}

async function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data2 = "Data 2";
      resolve(data2);
    }, 1000);
  });
}

async function fetchData3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data3 = "Data 3";
      resolve(data3);
    }, 1000);
  });
}

async function main() {
  try {
    const data1 = await fetchData1();
    console.log(data1); // Output: Data 1
    const data2 = await fetchData2();
    console.log(data2); // Output: Data 2
    const data3 = await fetchData3();
    console.log(data3); // Output: Data 3
  } catch (error) {
    console.error(error);
  }
}

main();

// In this example, we have three asynchronous functions that return Promises. 
// The main function is declared as async, allowing us to use the await keyword to wait,
// for each Promise to resolve before proceeding to the next one. 
// This makes the code easier to read and understand, as it avoids the need for chaining .then()
// methods and provides a more synchronous-like flow.
