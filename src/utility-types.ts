namespace UtilityTypes {

  interface Person2 {
    name: string;
    age: number;
    email: string;
  }

  // Define a new type called 'PartialPerson' that is a partial version of 'Person'
  type PartialPerson = Partial<Person2>;

  // Same as:
  // interface Person {
  //   name?: string | undefined;
  //   age?: number | undefined;
  //   email?: string | undefined;
  // }

  // The difference between any and unknown is that they can both be assigned in anything of any type and of any shape but the type unknown cannot be assigned to any other type, you first have to do a type check to perform this kind of operation when dealing with unknown type

  // const something: unknown = "This is unknown"
  // const anthing: any = "This is any"

  // const string: string = <string>something



  type UserType = {
    name: string
    age: number
    password?: string
  }

  type myType = typeof someShape

  const someShape: Record<"john" | "mike", UserType> = {
    john: {
      name: "John",
      age: 32
    },
    mike: {
      name: "Mike",
      age: 0
    }
  }

  function positionText(prop: "left" | "center" | "right"): string {
    switch (prop) {
      case "left":
        return "Moving left"
      case "center":
        return "Moving center"
      case "right":
        return "Moving right"
      default:
        const _exhaustiveChecks: never = prop
        console.log(_exhaustiveChecks);
        return "You seem to have provided incompatible type argument"
    }
  }

  const leftVal: string = positionText("left")
  const centerVal: string = positionText("center")
  const rightVal: string = positionText("right")
  // const somethingElseVal: string = positionText("something Else") // Even if we made all possible checks in the function definition, we are not allowed to call the function with an uncompatible shape argument, if we do that, TypeScript will consider it as an error.


  console.log(leftVal, centerVal, rightVal)



}