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