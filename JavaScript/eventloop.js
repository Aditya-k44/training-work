// Event Loop is a mechanism that allows JavaScript to perform non-blocking operations,
// by offloading tasks to the system kernel whenever possible. It is responsible for handling asynchronous
// operations, such as I/O tasks, timers, and promises.

// The event loop works in conjunction with the call stack and the task queue. 
// When an asynchronous operation is initiated, it is offloaded to the system kernel, 
// and a callback function is registered to be executed once the operation is complete. 
// The event loop continuously checks the call stack and the task queue. 
// If the call stack is empty, it will take the first task from the task queue and push it onto the 
// call stack for execution.

// This allows JavaScript to handle multiple tasks concurrently without blocking the main thread, 
// ensuring that the user interface remains responsive while performing time-consuming operations 
// in the background.

// Here's a simple example to illustrate the event loop:

console.log("Start");

setTimeout(() => {
  console.log("This is a delayed message");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This is a delayed message (after 2 seconds)

// In this example, the setTimeout function is used to schedule a callback to be executed after 2 seconds.
// The event loop allows the "End" message to be logged immediately after "Start", 
// while the delayed message is logged after the specified time, 
// demonstrating how JavaScript can handle asynchronous operations without blocking the main thread.

// another example of the event loop with micro task and macro task:

console.log("Start");

setTimeout(() => {
  console.log("This is a macro task");
}, 0);

Promise.resolve().then(() => {
  console.log("This is a micro task");
});

console.log("End");

// Output:
// Start
// End
// This is a micro task
// This is a macro task

// In this example, the Promise's then callback is a micro task, 
// which is executed before the setTimeout callback (macro task) even though it was scheduled after it. 
// This demonstrates the event loop's prioritization of micro tasks over macro tasks.
