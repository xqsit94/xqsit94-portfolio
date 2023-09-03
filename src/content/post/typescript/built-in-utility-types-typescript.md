---
title: 'What are the Built-in Utility Types in Typescript?'
category: 'Typescript'
description: 'In TypeScript, built-in utility types are pre-defined type transformations provided by the language to make working with types easier and more expressive.'
publishedDate: 'Jul 08 2023'
updatedDate: 'Jul 23 2023'
heroImage: '/images/typescript/built-in-utility-types-typescript.png'
tags:
  - typescript
---

## Introduction

In TypeScript, built-in utility types are pre-defined type transformations provided by the language to make working with types easier and more expressive. These utility types can be used to manipulate and transform existing types without the need to write custom type declarations. In this post, we will explore some of the most useful TypeScript utility types and how they can be used to improve your code.

- Partial<T>
- Record<T, K>
- Pick<T, K>
- Omit<T, K>
- Required<T>
- Readonly<T>
- Exclude<T, U>
- Extract<T, U>
- NonNullable<T>
- ReturnType<T>

## Partial<T>

`Partial<T>` is a built-in utility type in TypeScript that constructs a type with all properties of `T` set to optional. This means that every property of the resulting type can be either present or absent.

Here's an example of how to use `Partial<T>`:

```tsx
interface User {
  id: number
  name: string
  email: string
}

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates }
}

const user: User = { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
const updates = { name: 'Jane Doe' }

const updatedUser = updateUser(user, updates)
console.log(updatedUser) // { id: 1, name: "Jane Doe", email: "john.doe@example.com" }
```

In this example, the `updateUser` function takes a `User` object and an object containing partial updates to the user's properties. The `Partial<User>` type is used to define the type of the `updates` parameter, which means that any property of the `User` type can be present or absent in the `updates` object. The `updateUser` function then merges the original `user` object with the `updates` object using the spread operator, and returns the result as a new `User` object.

## Record<T, K>

The `Record` utility in TypeScript is used to create a type with specified keys and value types. It takes two type arguments: the key type and the value type. Here's an example:

```typescript
type Person = {
  name: string
  age: number
}

const people: Record<string, Person> = {
  john: { name: 'John', age: 30 },
  jane: { name: 'Jane', age: 25 }
}

const john = people['john'] // john is of type Person
```

In this example, we define a `Person` type with `name` and `age` properties. We then create a `Record` type with string keys and `Person` values. We use this `Record` type to define an object `people` with two entries, `john` and `jane`. We can then access the `john` entry and its properties using bracket notation.

## Pick<T, K>

`Pick<T, K>` is a built-in utility type in TypeScript that constructs a type by picking a set of properties `K` from `T`. This means that the resulting type has only the properties of `T` that are specified in `K`.

Here's an example of how to use `Pick<T, K>`:

```tsx
interface User {
  id: number
  name: string
  email: string
  age: number
}

type UserBasicInfo = Pick<User, 'id' | 'name'>

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 30
}
const userBasicInfo: UserBasicInfo = { id: user.id, name: user.name }

console.log(userBasicInfo) // { id: 1, name: "John Doe" }
```

In this example, the `UserBasicInfo` type is defined as a `Pick<User, "id" | "name">`, which means that it only includes the `id` and `name` properties of the `User` interface. We then create a `user` object with all properties of the `User` interface, and a `userBasicInfo` object with only the `id` and `name` properties of the `user` object. We can access the `id` and `name` properties of the `user` object using the dot notation, like `user.id` and `user.name`.

## Omit<T, K>

`Omit<T, K>` is a built-in utility type in TypeScript that constructs a type by omitting a set of properties `K` from `T`. This means that the resulting type has all properties of `T` except for the ones specified in `K`.

Here's an example of how to use `Omit<T, K>`:

```tsx
interface User {
  id: number
  name: string
  email: string
  age: number
}

type UserWithoutEmail = Omit<User, 'email'>

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 30
}
const userWithoutEmail: UserWithoutEmail = {
  id: user.id,
  name: user.name,
  age: user.age
}

console.log(userWithoutEmail) // { id: 1, name: "John Doe", age: 30 }
```

In this example, the `UserWithoutEmail` type is defined as an `Omit<User, "email">`, which means that it includes all properties of the `User` interface except for the `email` property. We then create a `user` object with all properties of the `User` interface, and a `userWithoutEmail` object with all properties of the `user` object except for the `email` property. We can access the `id`, `name`, and `age` properties of the `user` object using the dot notation, like `user.id`, `user.name`, and `user.age`.

## Required<T>

`Required<T>` is a built-in utility type in TypeScript that constructs a type with all properties of `T` set to required. This means that every property of the resulting type must be present.

Here's an example of how to use `Required<T>`:

```tsx
interface User {
  id?: number
  name?: string
  email?: string
}

function createUser(user: Required<User>): void {
  console.log(user.id, user.name, user.email)
}

const user: User = { id: 1, name: 'John Doe' }
createUser(user) // Error: Property 'email' is missing in type '{ id: number; name: string; }' but required in type 'Required<User>'.
```

In this example, the `createUser` function takes a `User` object as a parameter, but the `User` interface defines all properties as optional. The `Required<User>` type is used to define the type of the `user` parameter in the `createUser` function, which means that every property of the `User` type must be present in the `user` object. When we try to call the `createUser` function with an incomplete `User` object, TypeScript throws an error because the `email` property is missing.

## Readonly<T>

`Readonly<T>` is a built-in utility type in TypeScript that constructs a type with all properties of `T` set to readonly. This means that every property of the resulting type can be present, but cannot be modified.

Here's an example of how to use `Readonly<T>`:

```tsx
interface User {
  readonly id: number
  readonly name: string
  readonly email: string
}

function getUserInfo(user: Readonly<User>): void {
  console.log(user.id, user.name, user.email)
}

const user: User = { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
getUserInfo(user) // 1, "John Doe", "john.doe@example.com"

user.id = 2 // Error: Cannot assign to 'id' because it is a read-only property.
```

In this example, the `getUserInfo` function takes a `User` object as a parameter, but the `User` interface defines all properties as readonly. The `Readonly<User>` type is used to define the type of the `user` parameter in the `getUserInfo` function, which means that every property of the `User` type can be present, but cannot be modified. When we try to modify a property of the `user` object after it has been passed to the `getUserInfo` function, TypeScript throws an error because the property is readonly.

## Exclude<T, U>

`Exclude<T, U>` is a built-in utility type in TypeScript that constructs a type by excluding all types in `U` from `T`. This means that the resulting type has all types of `T` except for the ones that are assignable to `U`.

Here's an example of how to use `Exclude<T, U>`:

```tsx
type Fruit = 'apple' | 'banana' | 'orange'
type ExcludedFruit = Exclude<Fruit, 'banana'>

const fruits: Fruit[] = ['apple', 'banana', 'orange']
const excludedFruits: ExcludedFruit[] = ['apple', 'orange']

console.log(excludedFruits) // ["apple", "orange"]
```

In this example, the `ExcludedFruit` type is defined as an `Exclude<Fruit, "banana">`, which means that it excludes the `"banana"` type from the `Fruit` union type. We then create a `fruits` array with all types of the `Fruit` union type, and an `excludedFruits` array with all types of the `ExcludedFruit` type. We can access the elements of the `fruits` and `excludedFruits` arrays using the bracket notation, like `fruits[0]`, `fruits[1]`, `fruits[2]`, `excludedFruits[0]`, and `excludedFruits[1]`.

## Extract<T, U>

`Extract<T, U>` is a built-in utility type in TypeScript that constructs a type by extracting all types in `T` that are assignable to `U`. This means that the resulting type has only the types of `T` that are also assignable to `U`.

Here's an example of how to use `Extract<T, U>`:

```tsx
type Fruit = 'apple' | 'banana' | 'orange'
type ExtractedFruit = Extract<Fruit, 'banana' | 'orange'>

const fruits: Fruit[] = ['apple', 'banana', 'orange']
const extractedFruits: ExtractedFruit[] = ['banana', 'orange']

console.log(extractedFruits) // ["banana", "orange"]
```

In this example, the `ExtractedFruit` type is defined as an `Extract<Fruit, "banana" | "orange">`, which means that it extracts the `"banana"` and `"orange"` types from the `Fruit` union type. We then create a `fruits` array with all types of the `Fruit` union type, and an `extractedFruits` array with all types of the `ExtractedFruit` type. We can access the elements of the `fruits` and `extractedFruits` arrays using the bracket notation, like `fruits[0]`, `fruits[1]`, `fruits[2]`, `extractedFruits[0]`, and `extractedFruits[1]`.

## NonNullable<T>

`NonNullable<T>` is a built-in utility type in TypeScript that constructs a type by removing `null` and `undefined` from `T`. This means that the resulting type has all types of `T` except for `null` and `undefined`.

Here's an example of how to use `NonNullable<T>`:

```tsx
type User = {
  id: number
  name: string
  email?: string | null
}

type NonNullableUser = {
  id: number
  name: string
  email: string
}

function createUser(user: NonNullable<User>): void {
  console.log(user.id, user.name, user.email)
}

const user: User = { id: 1, name: 'John Doe', email: null }
createUser(user) // Error: Property 'email' is missing in type '{ id: number; name: string; email: null; }' but required in type 'NonNullable<User>'.
```

In this example, the `NonNullableUser` type is defined as a `User` type with the `email` property set to a non-nullable type. The `createUser` function takes a `NonNullable<User>` object as a parameter, which means that the `email` property must be present and not `null` or `undefined`. When we try to call the `createUser` function with a `User` object that has a `null` value for the `email` property, TypeScript throws an error because the `email` property is missing in the `NonNullable<User>` type.

## ReturnType<T>

`ReturnType<T>` is a built-in utility type in TypeScript that constructs a type by extracting the return type of a function type `T`. This means that the resulting type is the return type of the function.

Here's an example of how to use `ReturnType<T>`:

```tsx
function add(a: number, b: number): number {
  return a + b
}

type AddReturnType = ReturnType<typeof add>

const result: AddReturnType = 3
console.log(result) // Error: Type '3' is not assignable to type 'number'.
```

In this example, the `AddReturnType` type is defined as the `ReturnType<typeof add>` type, which extracts the return type of the `add` function. We then create a `result` variable with the type of `AddReturnType`, which means that it can only be assigned the return type of the `add` function. When we try to assign a number to the `result` variable, TypeScript throws an error because the number type is not assignable to the `AddReturnType` type.

## There are more…

The above examples are only few built-in utility types, there are many more and keep expanding you can keep exploring them in <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html" target="_blank">Typescript Documentation</a>.

## Conclusion

By using these built-in utility types, TypeScript users can write code that is shorter and easier to understand. They can also make their code safer by ensuring that the types are correct. This saves time because they don't have to manually change types themselves. Learning and using these utility types can greatly improve the experience of developing in TypeScript and help keep the codebase strong and error-free.
