function sayHi() {
  console.log("Hi!");
}


const intervalId = setInterval(sayHi, 1000); // Start the interval
setTimeout(() => {
  clearInterval(intervalId); // Stop the interval after 5 seconds
}, 5000);