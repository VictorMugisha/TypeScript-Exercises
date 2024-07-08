"use strict";
var Functions;
(function (Functions) {
    // 1. Basic Types
    // Exercise 1: Define variables for each of the basic types (boolean, number, string, array, tuple, enum, unknown, any, void, null, undefined, never, object) and assign appropriate values to them.
    let booleanVal = true;
    let num = 23;
    let myName = "Victor";
    let students = ["Joshua", "James", "Christian"];
    let studentsAges = [12, 43, 12, 34];
    let myTupple = [["Key1", "Value1"], ["Key2", 23]];
    let MyEnum;
    (function (MyEnum) {
        MyEnum["myNames"] = "Victor M";
        MyEnum["languages"] = "JavaScript and TypeScript";
    })(MyEnum || (MyEnum = {}));
    let myUnknown = "This can be anything but it's safer than any";
    let anything = "This also can be anyting";
    anything = true;
    function myVoid(message) {
        console.log(message, ` is ${message.length} characters long`);
    }
    let myNull = null;
    let myUndefined = undefined;
    let neverUsed;
    function failed(message) {
        throw new Error(message);
    }
    let myObject = { something: "it's value" };
    // 2. Union Types
    // Exercise 2: Write a function printID that accepts a parameter id which can either be a number or a string. The function should print ID is <id> to the console.
    function printID(id) {
        console.log(id);
    }
    function getUser(userId) {
        console.log(userId);
        return userId;
    }
    // 4. Type Assertions
    // Exercise 4: Write a function getLength that accepts a parameter value of type unknown. If value is a string or an array, return its length. Use type assertions to handle this.
    function getLength(value) {
        // if (typeof value === "string" || Array.isArray(value)) {
        //     return value.length
        // }
        let length = value.length || value.length;
        return length;
    }
    const mulitply = (a, b) => {
        return a * b;
    };
    function createPerson(firstname, lastname, age) {
        return {
            firstName: firstname,
            lastName: lastname,
            age
        };
    }
    function printCar(car) {
        console.log(`
        Car Brand: ${car.brand}
        Car Model: ${car.model}
        Car Year: ${car.year}
        `);
    }
    const myCustomPerson = {
        firstName: "Victor",
        lastName: "Mugisha",
        age: 20,
        middleName: "Syaka",
        id: 23
    };
    function createEmployee(fname, lname, age, department) {
        return {
            firstName: fname,
            lastName: lname,
            age,
            department
        };
    }
    const myObject2 = {
        0: "hello",
        2: "world"
    };
    function getFirstItem() {
        return myObject2[2];
    }
    class PersonClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const myPerson = new PersonClass("Victor", 20);
    console.log(myPerson.name);
})(Functions || (Functions = {}));
