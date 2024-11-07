{
    // Generic function to get a property value from an object
    function getProperty <T,K extends keyof T>(obj : T, key: K):T[K]{
        return obj[key];
    }
 
    // Sample Input:
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name")); // Output: Alice

}