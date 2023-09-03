---
title: 'Typescript vs Javascript, Why we should learn Typescript'
category: 'Typescript'
description: 'One of the main benefits of Typescript is its support for static typing. In Javascript, variables can be assigned any value, regardless of its data type.'
publishedDate: 'Jun 28 2023'
updatedDate: 'Jun 28 2023'
heroImage: '/images/typescript/typescript-vs-javascript-why-we-should-learn-typescript.png'
tags:
  - typescript
  - coding-basics
---

Javascript has been the go-to language for web developers for a long time. However, with the rise of complex web applications, there has been a growing need for a more structured and robust language. This is where Typescript comes in.

## What is Typescript?

Typescript is an open-source programming language that builds on top of Javascript. It adds features such as static typing, interfaces, and classes to Javascript, making it easier to write and maintain complex code.

One of the main benefits of Typescript is its support for static typing. In Javascript, variables can be assigned any value, regardless of its data type. This can lead to errors that are difficult to catch, especially in large codebases. Typescript allows you to define the data type of your variables, which can help catch errors before your code is even run.

## Why we should learn typescript?

In this section, we will explore the differences between Javascript and Typescript and why you should consider learning Typescript. We will cover basic Typescript concepts such as data types including object and array data types, union types, tuples, enums etc., which make it easier to write scalable code that can be easily maintained over time. By the end of this section, you'll have a good understanding of why Typescript is becoming increasingly popular among web developers and how it can help you build better applications.

## Javascript vs Typescript

Here is an example of a simple JavaScript function:

```javascript
function addNumbers(a, b) {
  return a + b
}

console.log(addNumbers(2, 3)) // Output: 5
```

In the above example, we have defined a function called `addNumbers` that takes two parameters and returns their sum. However, there is no way to specify the data type of the parameters or the return value. This can lead to errors if the function is called with the wrong data types.

For Example:

```javascript
console.log(addNumbers('2', '3')) // Output: "23"
```

**To solve this problem, we can use TypeScript.**

Here is the same function written in TypeScript:

```typescript
function addNumbers(a: number, b: number): number {
  return a + b
}

console.log(addNumbers(2, 3)) // Output: 5
```

In the TypeScript version, we have added type annotations to the function parameters and return type. This makes it easier to catch errors at compile-time rather than at runtime. Additionally, TypeScript provides better tooling support, such as code completion and refactoring, which can help improve productivity and reduce errors.

## Datatypes in Typescript

Typescript supports a range of data types that are similar to those in Javascript, but with some additional features. In this section, we'll explore the different data types in Typescript and how they can be used in your code.

### Boolean

The `boolean` data type represents a logical value of either `true` or `false`. For example:

```typescript
let isDone: boolean = false
```

### Number

The `number` data type represents numeric values. Typescript supports both decimal and hexadecimal literals, as well as binary and octal literals in ECMAScript 2015 and later.

```typescript
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744
```

### String

The `string` data type represents textual data. Typescript supports both single and double quotes for defining string literals.

```typescript
let name: string = 'John'
let message: string = 'Hello, world!'
```

### Array

The `array` data type represents a collection of values of the same type. Typescript supports both traditional arrays and generic arrays.

```typescript
let list: number[] = [1, 2, 3]
let genericList: Array<number> = [1, 2, 3]
```

### Tuple

The `tuple` data type represents an array with a fixed number of elements, where each element may be of a different type.

```typescript
let tuple: [string, number] = ['John', 30]
```

### Enum

The `enum` data type allows you to define a set of named constants. By default, enums are assigned numeric values starting from 0, but you can also assign your own values.

```typescript
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green
```

### Any

The `any` data type represents any value, similar to the `var` keyword in Javascript. This can be useful in situations where you don't know the type of a variable ahead of time.

```typescript
let myVariable: any = 'Hello, world!'
myVariable = 42
myVariable = true
```

### Void

The `void` data type represents the absence of a value. Functions that do not return a value have a return type of `void`.

```typescript
function logMessage(message: string): void {
  console.log(message)
}
```

### Null and Undefined

The `null` and `undefined` data types represent null and undefined values, respectively.

```typescript
let myNull: null = null
let myUndefined: undefined = undefined
```

### Object

The `object` data type represents any non-primitive type, such as arrays, functions, and objects.

```typescript
let myObject: object = { name: 'John', age: 30 }
```

## Union Type

Union types in Typescript allow you to define a variable that can have more than one data type. This can be useful in situations where a variable can have multiple possible values.

To define a union type, you use the `|` symbol to separate the different data types. Here's an example:

```typescript
let myVariable: string | number = 'Hello, world!'
```

In this example, we define a variable called `myVariable` that can have either a `string` or `number` data type.

## Object Data Type

The `object` data type in Typescript represents any non-primitive type, such as arrays, functions, and objects. You can define an object type using an interface or a class.

### Interface

An interface is a way to define a contract for an object, specifying the properties and their types that an object must have. Here's an example of an interface for a person object:

```typescript
interface Person {
  name: string
  age: number
  address?: string
}
```

In this example, we define a `Person` interface with three properties: `name` of type `string`, `age` of type `number`, and `address` of type `string` (which is optional due to the `?` symbol). You can then use this interface to define a variable of type `Person`:

```typescript
let john: Person = { name: 'John', age: 30 }
```

### Class

A class is a way to define a blueprint for creating objects with specific properties and methods. Here's an example of a class for a person object:

```typescript
class Person {
  name: string
  age: number
  address?: string

  constructor(name: string, age: number, address?: string) {
    this.name = name
    this.age = age
    this.address = address
  }
}
```

In this example, we define a `Person` class with three properties: `name` of type `string`, `age` of type `number`, and `address` of type `string` (which is optional due to the `?` symbol). We also define a constructor method that takes in these properties and assigns them to the object. You can then use this class to create a new `Person` object:

```typescript
let john = new Person('John', 30)
```

## Array Data Type

The `array` data type in Typescript represents a collection of values of the same type. Typescript supports both traditional arrays and generic arrays.

### Traditional Array

A traditional array is defined using square brackets `[]` and can contain values of any type:

```typescript
let numbers: number[] = [1, 2, 3]
let names: string[] = ['John', 'Jane', 'Bob']
```

### Generic Array

A generic array is defined using the `Array` keyword and can also contain values of any type:

```typescript
let numbers: Array<number> = [1, 2, 3]
let names: Array<string> = ['John', 'Jane', 'Bob']
```

You can also define a generic array with a specific length:

```typescript
let numbers: Array<number> = new Array(3)
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
```

## Enums

Enums in Typescript allow you to define a set of named constants. By default, enums are assigned numeric values starting from 0, but you can also assign your own values.

Here's an example of an enum for different colors:

```typescript
enum Color {
  Red,
  Green,
  Blue
}
```

In this example, we define an `enum` called `Color` with three named constants: `Red`, `Green`, and `Blue`. By default, `Red` is assigned a value of `0`, `Green` is assigned a value of `1`, and `Blue` is assigned a value of `2`.

You can then use this enum to define a variable of type `Color`:

```typescript
let myColor: Color = Color.Green
```

In this example, we define a variable called `myColor` of type `Color` and assign it the value `Green`.

You can also assign your own values to the named constants in an enum:

```typescript
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
```

In this example, we define the same `Color` enum as before, but we assign our own values to the named constants. `Red` is assigned a value of `1`, `Green` is assigned a value of `2`, and `Blue` is assigned a value of `4`.

You can also use enums with string values:

```typescript
enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
```

In this example, we define the same `Color` enum as before, but we assign string values to the named constants.

Enums can help make your code more readable and maintainable by providing a set of named constants that can be used throughout your code. By using enums, you can avoid hard-coding values and make your code more modular and organized.

## Conclusion

In this section we learned about range of data types, including object and array data types, union types, tuples, enums, and more. Overall, learning Typescript can help you become a more efficient and effective web developer. By using Typescript, you can write cleaner, more maintainable code that is less prone to errors. So if you're looking to enhance your web development skills, learning Typescript is definitely worth considering.
