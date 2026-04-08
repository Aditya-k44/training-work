// Promise is a powerful tool for handling asynchronous operations in JavaScript. 
// It allows you to write cleaner and more maintainable code by avoiding callback hell, 
// which can occur when you have multiple nested callbacks. 
// A Promise represents a value that may not be available yet but will be resolved in the future. 
// It can be in one of three states: pending, fulfilled, or rejected.

// Promise method syntax is written  like this:

new Promise((resolve, reject) => {
  // Asynchronous operation goes here
  // Call resolve(value) if the operation is successful
  // Call reject(error) if the operation fails
}); 


// Here's an example of how to use Promises:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data fetched from server";
      resolve(data);
    }, 2000);
  });
}

fetchData().then((message) => {
  console.log(message); // Output: Data fetched from server (after 2 seconds)
}).catch((error) => {
  console.error(error);
});


fetchData()
  .then((message) => {
    console.log(message); // Output: Data fetched from server (after 2 seconds)
  })
  .catch((error) => {
    console.error(error);
  });


// In this example, the fetchData function returns a Promise that simulates fetching data from a server.
// After 2 seconds, it resolves with the fetched data. 
// The then method is used to handle the resolved value, 
// while the catch method is used to handle any potential errors that may occur during,
// the asynchronous operation.

// Using Promises can help you write more readable and maintainable code when dealing,
// with asynchronous operations, as it allows you to chain multiple operations together,
// without nesting callbacks.

// promise chaining example:

function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data1 = "Data 1";
      resolve(data1);
    }, 1000);
  });
}

function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data2 = "Data 2";
      resolve(data2);
    }, 1000);
  });
}

function fetchData3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data3 = "Data 3";
      resolve(data3);
    }, 1000);
  });
}

fetchData1()
  .then((data1) => {
    console.log(data1); // Output: Data 1
    return fetchData2();
  })
  .then((data2) => {
    console.log(data2); // Output: Data 2
    return fetchData3();
  })
  .then((data3) => {
    console.log(data3); // Output: Data 3
  });  

//   promise chaining allows you to execute multiple asynchronous operations in a sequence,
//   where each operation depends on the result of the previous one. 
//   This helps to avoid callback hell and makes the code more readable and maintainable.  


