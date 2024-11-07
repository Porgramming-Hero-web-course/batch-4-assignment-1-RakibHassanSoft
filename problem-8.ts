{
    function isObject(obj: any): obj is object {
        return typeof obj === "object" && obj !== null;
    }

    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
        if (!isObject(obj)) 
            throw new Error("Provided value is not an object.");

        return keys.every(key => key in obj);
    }

    // Sample Input:
    const person = { name: "Alice", age: 25, email: "alice@example.com" };

    // Sample Output:
    console.log(validateKeys(person, ["name", "age"]));  // true
    // console.log(validateKeys(person, ["name", "address"]));  // false




}