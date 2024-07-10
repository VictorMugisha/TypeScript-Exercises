namespace TypedCodeWars {

    // # Number Format (6 kyu)

    // Format any integer provided into a string with "," (commas) in the correct places.

    // Example:

    // For n = 100000 the function should return '100,000';
    // For n = 5678545 the function should return '5,678,545';
    // for n = -420902 the function should return '-420,902'.


    interface IFormat {
        (amount: string): string
    }

    const format: IFormat = function (amount: string): string {
        let tupples: Array<string> = []
        let tupple: Array<string> = []
        for (let digit of amount.split('').reverse().join('')) {
            if (tupple.length !== 3) {
                tupple.push(digit)
            }
            if (tupple.length === 3) {
                tupples.push(tupple.reverse().join(''))
                tupple = []
            }
        }

        if (tupple.length !== 0) {
            tupples.push(tupple.reverse().join(''))
        }

        return `${tupples.reverse().join(',')}`
    }

    const surprise: string = format("1000")
    // console.log(surprise)





    // The range() function
    function range(...params: number[]): Array<number> {
        let start: number = 0
        let stop: number = 0
        let step: number = 0

        switch (params.length) {
            case 1:
                start = 0
                stop = params[0]
                step = 1
                break
            case 2:
                start = params[0]
                stop = params[1]
                step = 1
                break
            case 3:
                [start, stop, step] = params
                break
            default:
                start = 0
                step = 0
                stop = 0
                break
        }
        const solutionArray: Array<number> = []

        if (step === 0) {
            let count = start
            while (start < stop) {
                solutionArray.push(count)
                start++
            }
        } else {
            for (start; start < stop; start += step) {
                solutionArray.push(start)
            }
        }

        return solutionArray
    }


    // console.log(range(10))
    // console.log(range(0, 30, 5))
    // console.log(range(0))
    // console.log(range(1, 4, 0))
    // console.log(range(1, 11))
}


// Fibonacci Streaming
// You're going to provide a needy programmer a utility method that generates an infinite amount of sequential fibonacci numbers.

// to do this return an Iterator<BigInt>  starting with 1

// A fibonacci sequence starts with two 1s. Every element afterwards is the sum of the two previous elements. See:

// 1, 1, 2, 3, 5, 8, 13, ..., 89, 144, 233, 377, ...


export function* fibonacciSequence(): Iterator<bigint> {
    let firstVal: bigint = 1n
    let secondVal: bigint = 1n
    yield firstVal
    yield secondVal
    let nextVal: bigint = firstVal + secondVal
    while (true) {
        yield nextVal = firstVal + secondVal
        firstVal = secondVal
        secondVal = nextVal
    }
}





// DESCRIPTION: 6 kyu Sorted Arrays
// Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

// All the arguments except the last will be arrays, the last argument is n.

// nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
// Be mindful of performance.

export function nthSmallest(...params: Array<number | Array<number>>): number {
    const [n, ...temp] = params.reverse()
    const arrays: Array<number> = temp.reverse().flat()
    const sorted = arrays.sort((a, b) => a - b)
    const result: number = sorted[(n as number) - 1]
    console.log(result)
    return 0
}

// nthSmallest([1,5], [2], [4,8,9], 4)

// 7 kyu: Testing 1-2-3

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

export function number(array: string[]): string[] {
    const result: Array<string> = []
    array.forEach((element, index, self) => {
        result.push(`${index + 1}: ${element}`)
    });
    return result
}

// const test = number(["a", "b", "c"])
// console.log(test)






// Short Long Short
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
// ShortLongShort.solution("1", "22"); // returns "1221"
// ShortLongShort.solution("22", "1"); // returns "1221"

export function shortLongShort(a: string, b: string) {
    let resultString: string = ""
    let counts: any[] = [{ chars: a, len: a.length }, { chars: b, len: b.length }].sort((a, b) => a.len - b.len)
    resultString = counts[0].chars + counts[1].chars + counts[0].chars
    return resultString
}