
/**
 Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
 */
{
    // Define a union type for Circle and Rectangle
    type Circle = { shape: "circle"; radius: number };
    type Rectangle = { shape: "rectangle"; width: number; height: number };

    // Union type that can be either Circle or Rectangle
    type Shape = Circle | Rectangle;

    // Function to calculate the area using type guards
    function calculateShapeArea(params: Shape): number {
        let res: number;

        if (params.shape === "circle") res = 3.1416 * Math.pow(params.radius, 2);
        else if (params.shape === "rectangle") res = params.width * params.height;
        else throw new Error("Invalid shape type");
        

        return parseFloat(res.toFixed(2));
    }

    // Sample Input 1: Circle
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea); // Output: 78.54

    // Sample Input 2: Rectangle
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea); // Output: 24

}

