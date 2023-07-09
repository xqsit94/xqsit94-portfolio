---
title: 'JavaScript ES5 vs ES6 - Compare and Learn'
category: 'Javascript'
description: 'Two important versions of JavaScript, ES5 (ECMAScript 5) and ES6 (ECMAScript 2015), have played a crucial role in shaping the language. In this article, we will explore the differences between ES5 and ES6'
pubDate: 'Jul 10 2023'
updatedDate: 'Jul 10 2023'
heroImage: '/images/javascript/javascript-es5-vs-es6-compare-and-learn.png'
tags:
  - javascript
---

## Introduction

JavaScript, the versatile programming language that powers the interactive elements of web pages, has evolved significantly over the years. Two important versions of JavaScript, ES5 (ECMAScript 5) and ES6 (ECMAScript 2015), have played a crucial role in shaping the language. In this article, we will explore the differences between ES5 and ES6, highlighting the advancements and benefits that ES6 brings to the table.

ES5, released in 2009, was a significant update to JavaScript. It introduced several key features and improvements, making JavaScript more efficient and powerful. However, as web development evolved, developers sought more modern and sophisticated language features. This led to the development of ES6, which brought significant enhancements and new functionalities.

Let's start by examining the ES5 and new features introduced in ES6.

## In ES5 variables are declared with `var` are function scoped

In ES5 JavaScript, variables declared with the `var` keyword are function-scoped. This means that a variable declared inside a function is only accessible within that function and any nested functions. Here's an example:

```jsx
function foo() {
  var x = 10;
  console.log(x); // Output: 10

  function bar() {
    var y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }

  bar();
}

foo();
```

In this example, the variables `x` and `y` are declared using the `var` keyword inside the `foo` and `bar` functions, respectively. The `x` variable is accessible inside the `bar` function because it is nested inside the `foo` function. However, the `y` variable is not accessible outside the `bar` function.

## ES6 introduces block scoped variable using `let` and `const`

In ES6 JavaScript, `let` and `const` keywords are used to declare block-scoped variables. This means that a variable declared with `let` or `const` is only accessible within the block it is declared in, including any nested blocks. Here's an example:

```jsx
function foo() {
  let x = 10;
  console.log(x); // Output: 10

  if (true) {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }

  console.log(y); // Error: y is not defined
}

foo();
```

In this example, the variables `x` and `y` are declared using the `let` keyword inside the `foo` function. The `x` variable is accessible inside the nested `if` block because it is declared in the outer block. However, the `y` variable is not accessible outside the `if` block.

Note that variables declared with `const` are also block-scoped, but they cannot be reassigned once they are initialized.

### let vs const

`let` and `const` are both used to declare variables in JavaScript. The main difference between them is that `let` allows the variable to be reassigned, while `const` does not.

Here's an example:

```jsx
let x = 10;
x = 20; // Valid

const y = 30;
y = 40; // Invalid
```

In this example, the variable `x` is declared using `let` and is assigned the value `10`. It is then reassigned to `20`, which is valid.

The variable `y` is declared using `const` and is assigned the value `30`. When an attempt is made to reassign it to `40`, an error is thrown.

## Function definition in ES5

In ES5 JavaScript, you can define a function using the `function` keyword. Here's an example:

```jsx
function myFunction(x, y) {
  return x + y;
}

console.log(myFunction(1, 2)); // Output: 3
```

In this example, `myFunction` is defined using the `function` keyword. It takes two parameters, `x` and `y`, and returns their sum. The function is then called with the arguments `1` and `2`, and the result is logged to the console.

Note that in ES5, function declarations are hoisted to the top of their scope, which means you can call a function before it is defined.

## Introduction of Arrow functions in ES6

In ES6 JavaScript, you can define a function using arrow function syntax. Here's an example:

```jsx
const myFunction = (x, y) => {
  return x + y;
};

console.log(myFunction(1, 2)); // Output: 3
```

This is same example as previous declared with arrow function.

- Note that arrow functions have some differences from regular functions, such as the way they handle the `this` keyword and the fact that they cannot be used as constructors.

## ES5 - limited string manipulation capabilities

In ES5 JavaScript, string manipulation capabilities are more limited compared to ES6. Here are some examples of string manipulation in ES5:

1. Concatenation: You can concatenate strings using the `+` operator. Here's an example:

```jsx
var str1 = 'Hello';
var str2 = 'world';
var message = str1 + ' ' + str2;
console.log(message); // Output: "Hello world"
```

1. Substring: You can extract a substring from a string using the `substring()` method. Here's an example:

```jsx
var str = 'Hello, world!';
var substr = str.substring(0, 5);
console.log(substr); // Output: "Hello"
```

1. Replace: You can replace a substring in a string using the `replace()` method. Here's an example:

```jsx
var str = 'Hello, world!';
var newStr = str.replace('world', 'John');
console.log(newStr); // Output: "Hello, John!"
```

- Note that ES5 does not have methods like `startsWith()`, `endsWith()`, `includes()`, and `repeat()` that were introduced in ES6.

## ES6 - Template literals for easy string interpolation and multiline strings

In ES6 JavaScript, template literals provide an easy way to perform string interpolation and create multiline strings. Here's an example:

```jsx
const name = 'John';
const age = 30;
const message = `My name is ${name} and I am ${age} years old.
I live in New York City.`;
console.log(message);
```

In this example, a template literal is used to create a string that contains variables `name` and `age`. The variables are inserted into the string using `${}` syntax. The template literal also allows for the creation of a multiline string.

- Note that in ES5, string concatenation is used to perform string interpolation, which can be more cumbersome and error-prone.

## ES5 - Callback-based patterns for handling asynchronous operations

In ES5 JavaScript, callback-based patterns are commonly used for handling asynchronous operations. Here's an example:

```jsx
function fetchData(callback) {
  setTimeout(function () {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 1000);
}

fetchData(function (data) {
  console.log(data);
});
```

In this example, the `fetchData` function simulates an asynchronous operation using `setTimeout`. It takes a callback function as a parameter, which it calls with the data after the timeout has elapsed.

The `fetchData` function is then called with an anonymous function that logs the data to the console.

Note that callback-based patterns can lead to callback hell, where multiple nested callbacks make the code difficult to read and maintain. This is one of the reasons why ES6 introduced `Promise` and `async/await` for handling asynchronous operations.

## ES6 - Promises for handling asynchronous operations.

In ES6 JavaScript, `Promise` provides a structured approach for handling asynchronous operations. Here's an example:

```jsx
function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = { name: 'John', age: 30 };
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
```

In this example, the `fetchData` function returns a new `Promise` object. The `Promise` constructor takes a function with two parameters, `resolve` and `reject`. Inside the function, an asynchronous operation is simulated using `setTimeout`. When the operation is complete, the `resolve` function is called with the data.

The `fetchData` function is then called, and the `then` method is used to handle the resolved data. The `catch` method is used to handle any errors that occur.

Note that `Promise` provides a more readable and maintainable way to handle asynchronous operations than callback-based patterns.

## More ES6 Features

- De-structuring arrays and object
- Spread operator (`…`)
- `async/await` syntax for writing more readable asynchronous code.

## De-structuring arrays and object

De-structuring is a way to extract values from arrays or objects and assign them to variables in a more concise way. Here are some examples:

De-structuring an array:

```jsx
const myArray = [1, 2, 3];
const [a, b, c] = myArray;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

De-structuring an object:

```jsx
const myObject = { x: 1, y: 2, z: 3 };
const { x, y, z } = myObject;
console.log(x); // Output: 1
console.log(y); // Output: 2
console.log(z); // Output: 3
```

You can also use destructuring with default values:

```jsx
const myObject = { x: 1, y: 2 };
const { x, y, z = 3 } = myObject;
console.log(x); // Output: 1
console.log(y); // Output: 2
console.log(z); // Output: 3
```

## Spread Operator (`…`)

The spread operator (`...`) is used to expand an iterable (like an array or a string) into individual elements. Here are some examples:

Expanding an array:

```jsx
const myArray = [1, 2, 3];
console.log(...myArray); // Output: 1 2 3
```

Combining arrays:

```jsx
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

Copying an array:

```jsx
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
```

Expanding a string:

```jsx
const myString = 'hello';
console.log(...myString); // Output: h e l l o
```

Passing arguments to a function:

```jsx
function myFunction(x, y, z) {
  console.log(x, y, z);
}
const myArray = [1, 2, 3];
myFunction(...myArray); // Output: 1 2 3
```

Creating a new object with properties from an existing object:

```jsx
const myObject = { x: 1, y: 2 };
const myNewObject = { ...myObject, z: 3 };
```

## Async/Await syntax

`async/await` is a way to write asynchronous code that looks and behaves like synchronous code. It allows you to write code that waits for promises to resolve before moving on to the next line of code. Here's an example:

```jsx
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

In this example, the `fetchData` function is declared as an `async` function. It uses the `await` keyword to wait for the `fetch` function to return a response, and then waits for the response to be converted to JSON using the `json` method. The function then logs the data to the console.

If an error occurs, it is caught and logged to the console using a `try/catch` block.

## Conclusion

ES6 brought significant advancements and new features to JavaScript, improving developer productivity and code maintainability. The introduction of block-scoped variables, arrow functions, modules, and syntax enhancements made JavaScript code more concise, readable, and expressive. Being well-versed in both ES5 and ES6 is crucial for modern web developers, as it allows them to work effectively on a wide range of projects and codebases.
