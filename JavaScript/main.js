// ES6 Features in JavaScript

// 1. let and const: These are block-scoped variable declarations. 
// 'let' allows you to declare variables that can be reassigned, 
// while 'const' is used for variables that cannot be reassigned.

// example:
let name1 = "John";
name1 = "Doe"; // This is allowed

const age1 = 30;
age1 = 31; // This will throw an error


// 2. Arrow Functions: These are a shorter syntax for writing functions. 
// They also do not have their own 'this' context, which can be useful in certain situations.

// example:
const add1= (a, b) => a + b; 
console.log(add1(2, 3)); // Output: 5

// before arrow functions:
function add2(a, b) {
  return a + b;
}
console.log(add2(2, 3)); // Output: 5



// 3. Template Literals: These allow you to embed expressions inside string literals 
//    using backticks (`) and ${} syntax.

// example:
const name2 = "Alice";
const greeting = `Hello, ${name2}!`;
console.log(greeting); // Output: Hello, Alice!

// before template literals:
const name3 = "Alice";
const greeting1 = "Hello, " + name3 + "!";
console.log(greeting1); // Output: Hello, Alice!


// 4. Destructuring Assignment: This allows you to unpack values from arrays or properties 
//    from objects into distinct variables.

// example:
const person = { name: "Bob", age: 25 };
const { name4, age2 } = person;
console.log(name4); // Output: Bob
console.log(age2); // Output: 25
    
// before destructuring:
const name = person.name;
const age = person.age;     



// 5. Default Parameters: This allows you to set default values for function parameters.

// example:
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Charlie")); // Output: Hello, Charlie!

// before default parameters:
function greet(name) {
  name = name || "Guest";
  return "Hello, " + name + "!";
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Charlie")); // Output: Hello, Charlie!


// 6. Spread Operator: This allows you to expand an iterable (like an array) into individual elements.

// example:
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

// before spread operator:
const numbers1 = [1, 2, 3];
const newNumbers1 = numbers1.concat([4, 5]);
console.log(newNumbers1); // Output: [1, 2, 3, 4, 5]

// 7. Rest Operator: This is used to collect all remaining elements into an array. 
// It is often used in function parameters to handle variable numbers of arguments.

// example:
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5)); // Output: 9

// before rest operator:
function sum() {
  const args = Array.from(arguments);
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5)); // Output: 9   


// 8.Ternary Operator: This is a shorthand for an if-else statement, 
// allowing you to write conditional expressions in a more concise way.

// example:
const age3 = 18;
const canVote = age3 >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes

// before ternary operator:
const age4 = 18;
let canVote1;
if (age4 >= 18) {
  canVote1 = "Yes";
} else {
  canVote1 = "No";
}
console.log(canVote1); // Output: Yes


// 9. Promises: This is a way to handle asynchronous operations in JavaScript.
// example:
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

fetchData().then((message) => {
  console.log(message); // Output: Data fetched successfully!
}).catch((error) => {
  console.error(error);
});

// 10. Classes: This is a syntactical sugar over JavaScript's existing prototype-based inheritance, 
//    providing a more familiar syntax for creating objects and dealing with inheritance.

// example:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
  
const person1 = new Person("Dave", 40);
console.log(person1.greet()); // Output: Hello, my name is Dave and I am 40 years old.


// 11. Modules: This allows you to break your code into separate files and import/export 
//     functionality between them.

// example:
// In math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// In main.js
import { add, subtract } from './math.js';
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2

// These are just some of the many features introduced in ES6 that have greatly improved 
// the way we write JavaScript code.