

namespace MathOperations {
    export function add(x: number, y: number): number {
      return x + y;
    }
  }
  
// console.log(MathOperations.add(2, 3)); // Output: 5



// Playing around with decorators
// Class Decorator
@Sealed()
class PersonMe {

    @PropDecorator()
    name: string
    
    constructor() {
        this.name = "Victor"
        // console.log("Let's see which comes first")
    }
}

function Sealed() {
    return function (constructor: Function) {
        // console.log("this is a decorator running")
        Object.freeze(constructor)
        Object.seal(constructor)
    }
}

function PropDecorator() {
    return function (target: any, propertKey: string) {
        console.log(target)
        console.log(propertKey)
    }
}

const me = new PersonMe()
