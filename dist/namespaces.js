"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MathOperations;
(function (MathOperations) {
    function add(x, y) {
        return x + y;
    }
    MathOperations.add = add;
})(MathOperations || (MathOperations = {}));
// console.log(MathOperations.add(2, 3)); // Output: 5
// Playing around with decorators
// Class Decorator
let PersonMe = class PersonMe {
    constructor() {
        this.name = "Victor";
        // console.log("Let's see which comes first")
    }
};
__decorate([
    PropDecorator()
], PersonMe.prototype, "name", void 0);
PersonMe = __decorate([
    Sealed()
], PersonMe);
function Sealed() {
    return function (constructor) {
        // console.log("this is a decorator running")
        Object.freeze(constructor);
        Object.seal(constructor);
    };
}
function PropDecorator() {
    return function (target, propertKey) {
        console.log(target);
        console.log(propertKey);
    };
}
const me = new PersonMe();
