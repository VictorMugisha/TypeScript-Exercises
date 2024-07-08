namespace TypeGuards {

    // Type Guards

    function isString(x: any): x is string {
        return typeof x === "string"
    }

    let value: any = "This is a string"
    let value2: any = true

    // console.log(isString(value));

    // if (isString(value)) {
    //     let some: string = value.toLowerCase()
    //     console.log(some)
    // }

    type Someone = string | number | true

    let someone: Someone
    someone = "can be string"

    // Implement a type guard function isArray that checks if a value is an array. Use this type guard in a function that only processes arrays.
    function isArray(value: any): value is any[] {
        return Array.isArray(value)
    }

    function processArray(value: any) {
        if (isArray(value)) {
            console.log(`Processing array: ${value}`);
        } else {
            console.log("Not an array");
        }
    }

    // processArray([1, 2, 3]); // Should process the array
    // processArray("Hello");   // Should indicate it's not an array


    // LITERAL TYPES
    // Define a type Direction using string literal types. Create a function that accepts a parameter of type Direction and performs an action based on the direction.

    type Direction = "left" | "right" | "up" | "down";

    function move(direction: Direction) {
        // Implement the function logic based on the direction
        switch (direction) {
            case "left":
                console.log("Moving left direction");
                break
            case "right":
                console.log("Moving right direction");
                break
            case "down":
                console.log("Moving down direction");
                break
            case "up":
                console.log("Moving up direction");
                break
            default:
                const exhaustiveChecks: never = direction
                throw new Error(`Unhandled direction: ${exhaustiveChecks}`)
        }
    }

    try {
        // move("left");  // Should be valid
        // move("right"); // Should be valid
        // move("forward"); // Should cause a type error
    } catch (error: any) {
        console.error(error.message)
    }



    // Generic Types in TypeScript


    // function identity<Type>(value: Type): Type {
    //     return value as Type
    // }

    // const intValue = identity<number>(32)
    // const strValue = identity<string>("some string")

    // type TUser = {
    //     name: string
    //     age: number
    // }

    // const user = identity<TUser>({ name: "Victor", age: 32 })
    // console.log(user);



    // Discriminated Unions
    // Define a discriminated union Shape with types Circle and Rectangle. Implement a function calculateArea that computes the area based on the shape type.

    interface Circle {
        kind: "circle";
        radius: number;
    }

    interface Rectangle {
        kind: "rectangle";
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;

    function calculateArea(shape: Shape): number {
        // Implement the function logic using a discriminated union
        switch (shape.kind) {
            case "circle":
                return shape.radius * 2
            case "rectangle":
                return shape.height * shape.width
            default:
                const _exhausted: never = shape
                return assertNever(_exhausted)
        }
    }

    function assertNever(x: never): never {
        throw new TypeError("Unknown shape recieved!")
    }

    const myCircle: Circle = { kind: "circle", radius: 5 };
    const myRectangle: Rectangle = { kind: "rectangle", width: 10, height: 5 };

    console.log(calculateArea(myCircle));    // Should compute the area of the circle
    console.log(calculateArea(myRectangle)); // Should compute the area of the rectangle
    // console.log(calculateArea("Something Else")); // Should throw an Error because "Something Else" is not of either Circle or Rectangle shapes


    // INDEX SIGNATURE SYNTAX

    const salary1 = {
        monthSalary: 10000,
        weekSalary: 20000
    }

    const salary2 = {
        yearSalary: 3000,
        seasonSalary: 1000
    }

    function calculateSalary(salary: { [key: string]: number }): number {
        let totalSalary = 0
        for (let prop in salary) {
            totalSalary += salary[prop]
        }
        return totalSalary
    }

    // console.log(calculateSalary(salary1))
    // console.log(calculateSalary(salary2))


}