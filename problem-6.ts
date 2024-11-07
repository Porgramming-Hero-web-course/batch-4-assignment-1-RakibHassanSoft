{
    type Basic = {
        name: string;
        age: number;
        email: string;
    }


    function updateProfile<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
        obj[key] = value;
        return obj;
    }
     //Type any is not assignable to type never
    // function updateProfile(obj: Basic, key: keyof Basic, value: any): Basic {
    //     obj[key] = value;
    //     return obj;
    // }

    // Sample Input:
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, "age", 26));

    // Sample Output:
    // {
    //     name: "Alice",
    //     age: 26,
    //     email: "alice@example.com"
    // }
}