"use strict";
var TypeGuards;
(function (TypeGuards) {
    // Type Guards
    function isString(x) {
        return typeof x === "string";
    }
    let value = "This is a string";
    let value2 = true;
    let someone;
    someone = "can be string";
    // Implement a type guard function isArray that checks if a value is an array. Use this type guard in a function that only processes arrays.
    function isArray(value) {
        return Array.isArray(value);
    }
    function processArray(value) {
        if (isArray(value)) {
            console.log(`Processing array: ${value}`);
        }
        else {
            console.log("Not an array");
        }
    }
    function move(direction) {
        // Implement the function logic based on the direction
        switch (direction) {
            case "left":
                console.log("Moving left direction");
                break;
            case "right":
                console.log("Moving right direction");
                break;
            case "down":
                console.log("Moving down direction");
                break;
            case "up":
                console.log("Moving up direction");
                break;
            default:
                const exhaustiveChecks = direction;
                throw new Error(`Unhandled direction: ${exhaustiveChecks}`);
        }
    }
    try {
        // move("left");  // Should be valid
        // move("right"); // Should be valid
        // move("forward"); // Should cause a type error
    }
    catch (error) {
        console.error(error.message);
    }
    function calculateArea(shape) {
        // Implement the function logic using a discriminated union
        switch (shape.kind) {
            case "circle":
                return shape.radius * 2;
            case "rectangle":
                return shape.height * shape.width;
            default:
                const _exhausted = shape;
                return assertNever(_exhausted);
        }
    }
    function assertNever(x) {
        throw new TypeError("Unknown shape recieved!");
    }
    const myCircle = { kind: "circle", radius: 5 };
    const myRectangle = { kind: "rectangle", width: 10, height: 5 };
    console.log(calculateArea(myCircle)); // Should compute the area of the circle
    console.log(calculateArea(myRectangle)); // Should compute the area of the rectangle
    // console.log(calculateArea("Something Else")); // Should throw an Error because "Something Else" is not of either Circle or Rectangle shapes
    // INDEX SIGNATURE SYNTAX
    const salary1 = {
        monthSalary: 10000,
        weekSalary: 20000
    };
    const salary2 = {
        yearSalary: 3000,
        seasonSalary: 1000
    };
    function calculateSalary(salary) {
        let totalSalary = 0;
        for (let prop in salary) {
            totalSalary += salary[prop];
        }
        return totalSalary;
    }
    // console.log(calculateSalary(salary1))
    // console.log(calculateSalary(salary2))
})(TypeGuards || (TypeGuards = {}));
