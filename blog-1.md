# How Generics Build Reusable and Strictly Typed Code in TypeScript

## Introduction
In TypeScript, developers often faced a some issue that write flexible code using "any" and lose all type safety, or write code that only works for one specific data type. Generics solved this by allowing us to create "type variables"—placeholders that stay strictly typed based on what is passed into them.

## Why Generics Matter
Generics allow to capture the type of the argument provided by the user. This ensures that the relationship between input and output are same type.

## The "Identity" Example
Without generics, a function that returns what it receives might look like this:
```ts
 function identity(arg: any): any {
  return arg;
}
```

Using any is "generic" in the sense that it accepts anything, but lose the information of what the type actually was. If  pass a string, the compiler treats the return value as any.

With **Generics**, Use a type variable (usually <T>):
```ts
function identity<T>(arg: T): T {
  return arg;
}
const output = identity("Hello World");
```
## Building Reusable Components
In large applications, we all often find building UI components like Tables or Dropdowns. Generics ensure these components can handle any data structure while providing autocompletion.
```ts
type TableProps<T> = {
  data: T[];
  renderRow: (item: T) => string;
};
```
This allows the same table component to work with multiple data structures without rewriting logic.

## Generic Constraints
Sometimes developers need flexibility with certain limitations.
```ts
interface HasId {
  id: number;
}

function printId<T extends HasId>(item: T): void {
  console.log(item.id);
}
```
Generic constraints ensure that only objects matching specific rules are accepted.
This combines flexibility with structure and safety.

## Conclusion
Generics are one of the most important features in TypeScript for building scalable and maintainable applications. They allow developers to create reusable logic without compromising strict type safety.
As projects grow larger and more complex, generics become essential for reducing duplication, improving consistency, and maintaining clean code across an entire codebase.
Mastering generics is not just about writing cleaner code — it is about building software systems that remain reliable, flexible, and scalable over time.