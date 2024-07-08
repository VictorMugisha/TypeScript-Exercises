"use strict";
var BasicTypes;
(function (BasicTypes) {
    // TypeScript Basic Types Examples
    // 1. Boolean: Represents true/false values
    let isDone = true;
    // 2. Number: Represents both integer and floating-point numbers
    let decimal = 6; // Decimal number
    let hex = 0xf00d; // Hexadecimal number
    let binary = 0b1010; // Binary number
    let octal = 0o744; // Octal number
    // 3. String: Represents text data
    let color = "blue"; // Using double quotes
    let fullName = `John Doe`; // Using template strings
    let age = 30;
    let sentence = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`; // Embedded expressions in template strings
    // 4. Array: Represents a collection of elements of the same type
    let list = [1, 2, 3]; // Array of numbers
    let list2 = [1, 2, 3]; // Generic array type syntax
    // 5. Tuple: Represents a fixed number of elements of known types
    let x;
    x = ["hello", 10]; // Correct
    // x = [10, "hello"]; // Error: Type 'number' is not assignable to type 'string'
    // 6. Enum: A way of giving more friendly names to sets of numeric values
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    let c = Color.Green; // Enum usage
    // 7. Unknown: Represents a value that could be of any type, safer than 'any' because it requires type checking before usage
    let notSure = 4;
    notSure = "maybe a string instead";
    notSure = false; // It's okay, it can be any type
    // 8. Any: Represents any type, useful during gradual migration to TypeScript or working with third-party libraries
    let looselyTyped = 4;
    looselyTyped = "now it's a string";
    looselyTyped = false; // It's okay, it can be any type
    // 9. Void: Represents the absence of a type, commonly used for functions that do not return a value
    function warnUser() {
        console.log("This is my warning message");
    }
    let unusable = undefined; // Only 'undefined' and 'null' are assignable to void
    // 10. Null and Undefined: Represent the absence of a value
    let u = undefined;
    let n = null;
    // 11. Never: Represents the type of values that never occur, used for functions that throw errors or have infinite loops
    function error(message) {
        throw new Error(message);
    }
    function fail() {
        return error("Something failed");
    }
    function infiniteLoop() {
        while (true) { }
    }
    // 12. Object: Represents non-primitive types, i.e., anything that is not a number, string, boolean, symbol, null, or undefined
    // declare function create(o: object | null): void;
    // create({ prop: 0 }); // OK
    // create(null); // OK
    // create(42); // Error
    // create("string"); // Error
    // create(false); // Error
    // 13. Type assertions: A way to tell the compiler to treat a value as a different type
    let someValue = "this is a string";
    let strLength = someValue.length; // 'as' syntax
    // Alternative syntax for type assertions
    let someValue2 = "this is also a string";
    let strLength2 = someValue2.length; // Angle-bracket syntax
    // Advanced Types
    // 1. Union Types: Represents a value that can be one of several types
    let union;
    union = "hello"; // OK
    union = 42; // OK
    let person = { name: "John", age: 25 };
    // 3. Literal Types: Represents a specific value, can be used with union types to create a finite set of values
    let literal;
    literal = "hello"; // OK
    // literal = "foo"; // Error: Type '"foo"' is not assignable to type '"hello" | "world"'
    // 4. Nullable Types: A type that can also be null or undefined
    let nullableString = null; // Can be string or null
    nullableString = "Not null anymore"; // OK
    let point1 = { x: 10 }; // y is optional
    let point2 = { x: 10, y: 20 }; // OK
    let p1 = { x: 10, y: 20 };
    // p1.x = 5; // Error: cannot assign to 'x' because it is a read-only property
    // 7. Function Types: Describes the types of functions
    function add(x, y) {
        return x + y;
    }
    let myAdd = function (x, y) {
        return x + y;
    };
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    // 9. Classes: A blueprint for creating objects with predefined properties and methods
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        greet() {
            return `Hello, ${this.greeting}`;
        }
    }
    let greeter = new Greeter("world");
    // 10. Generics: Allows creating reusable components that work with different types
    function identity(arg) {
        return arg;
    }
    let output = identity("myString"); // type of output will be 'string'
    let output2 = identity(42); // type of output2 will be 'number'
})(BasicTypes || (BasicTypes = {}));
