namespace Functions {
    // 1. Basic Types
    // Exercise 1: Define variables for each of the basic types (boolean, number, string, array, tuple, enum, unknown, any, void, null, undefined, never, object) and assign appropriate values to them.

    let booleanVal: boolean = true
    let num: number = 23
    let myName: string = "Victor"
    let students: Array<string> = ["Joshua", "James", "Christian"]
    let studentsAges: number[] = [12, 43, 12, 34]
    let myTupple: [string, any][] = [["Key1", "Value1"], ["Key2", 23]]
    enum MyEnum {
        myNames = "Victor M",
        languages = "JavaScript and TypeScript"
    }
    let myUnknown: unknown = "This can be anything but it's safer than any"
    let anything: any = "This also can be anyting"
    anything = true

    function myVoid(message: string): void {
        console.log(message, ` is ${message.length} characters long`)
    }

    let myNull: null = null
    let myUndefined: undefined = undefined
    let neverUsed: never
    function failed(message: string): never {
        throw new Error(message)
    }

    let myObject: object = { something: "it's value" }




    // 2. Union Types
    // Exercise 2: Write a function printID that accepts a parameter id which can either be a number or a string. The function should print ID is <id> to the console.

    function printID(id: number | string) {
        console.log(id);
    }



    // 3. Type Aliases
    // Exercise 3: Create a type alias UserID that can be either a number or a string. Write a function getUser that accepts a UserID and prints User ID is <id> to the console.
    type UserID = number | string
    function getUser(userId: UserID): UserID {
        console.log(userId)
        return userId
    }




    // 4. Type Assertions
    // Exercise 4: Write a function getLength that accepts a parameter value of type unknown. If value is a string or an array, return its length. Use type assertions to handle this.

    function getLength(value: unknown): number | undefined {
        // if (typeof value === "string" || Array.isArray(value)) {
        //     return value.length
        // }

        let length = (value as string).length || (value as any[]).length
        return length
    }




    // 5. Function Types
    // Exercise 5: Define a function type BinaryOperation that represents a function taking two number parameters and returning a number. Write a function multiply that matches this type.

    type BinaryOperation = {
        (number1: number, number2: number): number
    }
    const mulitply: BinaryOperation = (a: number, b: number): number => {
        return a * b
    }





    // 6. Object Types
    // Exercise 6: Define an object type Person with properties firstName (string), lastName (string), and age (number). Write a function createPerson that accepts these properties as parameters and returns an object of type Person.

    type Person = {
        firstName: string
        lastName: string
        age: number
    }

    function createPerson(firstname: string, lastname: string, age: number): Person {
        return {
            firstName: firstname,
            lastName: lastname,
            age
        }
    }


    // 7. Interfaces
    // Exercise 7: Define an interface Car with properties brand (string), model (string), and year (optional number). Write a function printCar that accepts a Car object and prints its details to the console.

    interface Car {
        brand: string
        model: string
        year?: number
    }

    function printCar(car: Car) {
        console.log(`
        Car Brand: ${car.brand}
        Car Model: ${car.model}
        Car Year: ${car.year}
        `)
    }





    // 8. Optional and Readonly Properties
    // Exercise 8: Extend the Person interface to add an optional property middleName (string) and a readonly property id (number). Create a Person object with these properties.

    interface PersonInterface {
        firstName: string
        lastName: string
        age: number
    }

    interface OtherPerson extends PersonInterface {
        middleName: string
        readonly id: number
    }

    const myCustomPerson: OtherPerson = {
        firstName: "Victor",
        lastName: "Mugisha",
        age: 20,
        middleName: "Syaka",
        id: 23
    }




    // 9. Extending Interfaces
    // Exercise 9: Create an interface Employee that extends Person and adds a property department (string). Write a function createEmployee that accepts properties for an employee and returns an object of type Employee.

    interface Employee extends PersonInterface {
        department: string
    }

    function createEmployee(fname: string, lname: string, age: number, department: string): Employee {
        return {
            firstName: fname,
            lastName: lname,
            age,
            department
        }
    }





    // 10. Indexable Types
    // Exercise 10: Define an interface StringArray that allows indexing with a number to retrieve a string. Create a StringArray object and assign some values to it. Write a function getFirstItem that returns the first item in a StringArray.

    interface StringArray {
        [index: number]: string
    }

    const myObject2: StringArray = {
        0: "hello",
        2: "world"
    }

    function getFirstItem(): string {
        return myObject2[2]
    }



    class PersonClass {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    const myPerson = new PersonClass("Victor", 20)

    console.log(myPerson.name);




}