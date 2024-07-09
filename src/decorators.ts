

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
 * 
 * ### Class decorator
 * A class decorator makes it possible to intercept the `constructor` of a class. They are called when the class is declared, not when a new instance is instantiated
 */

// Class Decorator
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }
  
  @sealed
  export class Person {
    constructor(public name: string) {}
  }
  
  const person = new Person("Alice");
  console.log(person);
  
  // Explanation:
  /**
   * 1. `sealed` is a decorator function that seals the class and its prototype, preventing new properties from being added
   * 2. `@sealed` is a decorator applied to the `Person` class
   */


@Frozen
class IceCream {}

function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

console.log(Object.isFrozen(IceCream)); // true

// class FroYo extends IceCream {} // error, cannot be extended

