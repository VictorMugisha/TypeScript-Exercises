"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacciSequence = fibonacciSequence;
var TypedCodeWars;
(function (TypedCodeWars) {
    // # Number Format (6 kyu)
    const format = function (amount) {
        let tupples = [];
        let tupple = [];
        for (let digit of amount.split('').reverse().join('')) {
            if (tupple.length !== 3) {
                tupple.push(digit);
            }
            if (tupple.length === 3) {
                tupples.push(tupple.reverse().join(''));
                tupple = [];
            }
        }
        if (tupple.length !== 0) {
            tupples.push(tupple.reverse().join(''));
        }
        return `${tupples.reverse().join(',')}`;
    };
    const surprise = format("1000");
    // console.log(surprise)
    // The range() function
    function range(...params) {
        let start = 0;
        let stop = 0;
        let step = 0;
        switch (params.length) {
            case 1:
                start = 0;
                stop = params[0];
                step = 1;
                break;
            case 2:
                start = params[0];
                stop = params[1];
                step = 1;
                break;
            case 3:
                [start, stop, step] = params;
                break;
            default:
                start = 0;
                step = 0;
                stop = 0;
                break;
        }
        const solutionArray = [];
        if (step === 0) {
            let count = start;
            while (start < stop) {
                solutionArray.push(count);
                start++;
            }
        }
        else {
            for (start; start < stop; start += step) {
                solutionArray.push(start);
            }
        }
        return solutionArray;
    }
    // console.log(range(10))
    // console.log(range(0, 30, 5))
    // console.log(range(0))
    // console.log(range(1, 4, 0))
    // console.log(range(1, 11))
})(TypedCodeWars || (TypedCodeWars = {}));
// Fibonacci Streaming
// You're going to provide a needy programmer a utility method that generates an infinite amount of sequential fibonacci numbers.
// to do this return an Iterator<BigInt>  starting with 1
// A fibonacci sequence starts with two 1s. Every element afterwards is the sum of the two previous elements. See:
// 1, 1, 2, 3, 5, 8, 13, ..., 89, 144, 233, 377, ...
function* fibonacciSequence() {
    let firstVal = 1n;
    let secondVal = 1n;
    yield firstVal;
    yield secondVal;
    let nextVal = firstVal + secondVal;
    while (true) {
        yield nextVal = firstVal + secondVal;
        firstVal = secondVal;
        secondVal = nextVal;
    }
}
