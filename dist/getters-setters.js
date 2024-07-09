"use strict";
class Person {
    get something() {
        return this._age;
    }
    set something(theAge) {
        if (theAge > 0) {
            this._age = theAge;
        }
    }
    constructor() {
        this._age = 13;
        this._name = "Person";
    }
}
// const john = new Person()
// john.something = 12
// console.log(john.something)
let something = "123";
console.log(something + 20);
// let newVal = something as number
// const sum: number = newVal + 20
// console.log(sum)
// something = 76 as number + 4
// console.log(something);
