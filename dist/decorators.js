"use strict";
/**
 * Decorators in TypeScript are special functions that can be attached to classes, methods, properties, accessors or function parameters to modify their behaviors. They are form of meta-programming, meaning they allow you to add annotations and layer of abstraction to your code.
 *
 * Decorators are functions that are executed when their target is defined. They recieve the target as an argument and can optionally return a new property descriptor or an updated target. The key point to note is that decorators are executed only once, during the class declaration.
 *
 * Decorators allow developers to modify or extend classes, methods, properties and parameters during runtime, making them an essential part of modern TypeScript programming.
 *
 * There are five ways to use decorators or five types of decorators
 * 1. Class decorator
 * 2. Property decorator
 * 3. Method decorator
 * 4. Parameter decorator
 * 5. Accessor decorators: (setter and getter)
 *
 * Key Concepts:
 * 1. Decorator Factory: is a function that return a decorator function, often used to pass parameters to the decorator. This just means that decorator itself is wrapped in a function so we can pass custom arguments to it `@Cool('stuf')` Feel free to omit the outer function if you want to apply a decorator without arguments '@Cool'
 *
 * ### Class decorator
 * A class decorator makes it possible to intercept the `constructor` of a class. They are called when the class is declared, not when a new instance is instantiated
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// Class Decorator
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
exports.Person = Person;
exports.Person = Person = __decorate([
    sealed
], Person);
const person = new Person("Alice");
console.log(person);
// Explanation:
/**
 * 1. `sealed` is a decorator function that seals the class and its prototype, preventing new properties from being added
 * 2. `@sealed` is a decorator applied to the `Person` class
 */
let IceCream = class IceCream {
};
IceCream = __decorate([
    Frozen
], IceCream);
function Frozen(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
console.log(Object.isFrozen(IceCream)); // true
// class FroYo extends IceCream {} // error, cannot be extended
/**
 * 2. Property Decorator
 * Property decorators can be extremely useful because they can listen to state changes on a class
 */ 
