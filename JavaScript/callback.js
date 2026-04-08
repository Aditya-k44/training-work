Callback 

// Callback functions are functions that are passed as arguments to other 
// functions and are executed after a certain event or operation is completed. 
// They are commonly used in asynchronous programming to handle tasks that take time to complete, 
// such as fetching data from a server or reading a file.

// callback functions syntax is written like this:

function someFunction(callback) {
  // Perform some operations
  callback(); // Call the callback function after the operations are completed
}

// Example of a simple callback function

// Callback function example
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched from server";
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

fetchData(displayData); // Output: Data fetched from server (after 2 seconds)

// Callback function with error handling example
function fetchDataWithError(callback) {
  setTimeout(() => {
    const error = null; // Simulating no error
    const data = "Data fetched from server";
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  }, 2000);
}

function handleData(error, data) {
  if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log(data);
  }
}

fetchDataWithError(handleData); // Output: Data fetched from server (after 2 seconds)   


// callback functions can lead to a situation called "callback hell" when there are multiple 
// nested callbacks, making the code difficult to read and maintain.

// Example of callback hell
function fetchData1(callback) {
  setTimeout(() => {
    const data1 = "Data 1";
    callback(data1);
  }, 1000);
}

function fetchData2(callback) {
  setTimeout(() => {
    const data2 = "Data 2";
    callback(data2);
  }, 1000);
}

function fetchData3(callback) {
  setTimeout(() => {
    const data3 = "Data 3";
    callback(data3);
  }, 1000);
}

fetchData1((data1) => {
  console.log(data1); // Output: Data 1
  fetchData2((data2) => {
    console.log(data2); // Output: Data 2
    fetchData3((data3) => {
      console.log(data3); // Output: Data 3
    });
  });
});

// Using Promises to avoid callback hell
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
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });   