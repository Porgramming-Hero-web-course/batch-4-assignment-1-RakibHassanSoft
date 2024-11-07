# The significance of union and intersection types in Typescript.
- union types and intersection types stand out for their ability to help manage complex data structures, improve code maintainability, and ensure better type safety

## Union type
### A union type allows a variable or parameter to hold multiple types

- Example
- If we want to write string,boolen and number in a variable , without typescript it is not possible. union type gives this ability to wtrite complex and managable data structure
```ts
let value: string | number | boolen;
value = "Rakib"; 
value = 100;   
value = false;  

```
### Why Union Types are Useful
-Flexibility: Allows you to specify multiple possible types for a variable or function argument.
-Type Safety: TypeScript ensures that only the specified types are assigned to variables, preventing runtime errors.

### When to Use Union Types?
- We need a variable or function parameter that can accept multiple types.
- We're working with APIs or libraries where a value might return different types.
- We're dealing with user input or any other data that could be one of several types.

```ts
function greet(person: string | string[]) {
  if (typeof person === "string") {
    console.log(`Hello, ${person}!`);
  } else {
    console.log("Hello, everyone!");
  }
}
```



## Intersection type
### An intersection type combines multiple types into one
- With intersection types, we can create more complex types by merging multiple types together, ensuring that an object meets multiple criteria.
-Example

- In this example, the **EmployeeProfile** type combines the **Person** and **Employee** types. The result is an object that must have both the *name* and *age* properties from **Person**, as well as the *jobTitle* and *company* properties from **Employee**.
```ts
type Person = { name: string; age: number };
type Employee = { jobTitle: string; company: string };

type EmployeeProfile = Person & Employee;

const employee: EmployeeProfile = {
  name: "Alice",
  age: 30,
  jobTitle: "Developer",
  company: "TechCorp",
};
```

### Why Intersection Types are Useful:
- Combining Multiple Types: You can merge different types to create a more complex, customized object that satisfies multiple conditions.
- Enforcing Complex Structures: Intersection types help you define objects that need to satisfy multiple contracts, improving data integrity.

### When to Use Intersection Types?

- We need to combine multiple types into a single, more complex type.
- We are working with objects that need to satisfy multiple conditions.
_ We want to ensure that an object has all properties from several types

```ts
function getEmployeeInfo(employee: Person & Employee) {
  console.log(`${employee.name} works as a ${employee.jobTitle} at ${employee.company}`);
}
```

## Summary
Union and Intersection types both are essential tools in TypeScript for ensuring type safety while maintaining flexibility in our code. Union types give us the ability to handle multiple types, making our code more adaptable, while intersection types help us enforce more complex structures, ensuring our objects meet multiple criteria.