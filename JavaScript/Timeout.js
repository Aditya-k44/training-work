// Timeout and Interval 

// setTimeout() method is used to call a function after a specified number of milliseconds.

// Timeout method syntax is written like this:

// setTimeout(function, delay, arg1, arg2, ...);

// example:
function greet() {
  console.log("Hello, World!");
}
setTimeout(greet, 2000); // Output: Hello, World! (after 2 seconds)

// To cancel the timeout, you can use clearTimeout() method with the timeout ID returned by setTimeout().
// example:
const timeoutId = setTimeout(greet, 2000); // Start the timeout
setTimeout(() => {
  clearTimeout(timeoutId); // Cancel the timeout after 1 second
}, 1000);   



// setInterval() method is used to call a function repeatedly at specified intervals (in milliseconds).

// setInterval method syntax is written like this:

// setInterval(function, delay, arg1, arg2, ...);

// example:
function sayHi() {
  console.log("Hi!");
}
setInterval(sayHi, 1000); // Output: Hi! (every 1 second)

// To stop the interval, you can use clearInterval() method with the interval ID returned by setInterval().
// example:
const intervalId = setInterval(sayHi, 1000); // Start the interval
setTimeout(() => {
  clearInterval(intervalId); // Stop the interval after 5 seconds
}, 5000);

