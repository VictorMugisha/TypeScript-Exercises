
function log(value: string | number) {
    if (typeof value === "string") {
        console.log("The value is string")
    } else {
        console.log("The value is number")
    }
}

function isItOdd(value: number): boolean  {
    if (typeof value === "number") {
        return true
    }
    return false
}




 namespace Assertion {
    const everyType: (number | string)[] = [1, 2, 3, "everything"]
    const numbers: number[] = everyType.slice(0, 2) as number[]
    const str: string = everyType[3] as string

    let anyType: any = "I know this is string"
    let strFromAny: string = anyType as string
 }


 

type Props = {
    name: string
} & ({
    gender: 'male'
    salary: number
} | {
    gender: 'female'
    weight: number
})


function child(args: Props) {
    if ('salary' in args) {
        console.log("Salary is: ", args.salary)
    } 
    if ('weight' in args) {
        console.log("Weight is: ", args.weight)
    }
}


child({ gender: 'male', name: 'John', salary: 200000})
child({ gender: 'female', name: 'John', weight: 78})