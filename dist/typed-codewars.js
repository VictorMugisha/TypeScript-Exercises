"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacciSequence = fibonacciSequence;
exports.nthSmallest = nthSmallest;
exports.number = number;
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
// DESCRIPTION: 6 kyu Sorted Arrays
// Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.
// All the arguments except the last will be arrays, the last argument is n.
// nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
// Be mindful of performance.
function nthSmallest(...params) {
    const [n, ...temp] = params.reverse();
    const arrays = temp.reverse().flat();
    const sorted = arrays.sort((a, b) => a - b);
    const result = sorted[n - 1];
    console.log(result);
    return 0;
}
// nthSmallest([1,5], [2], [4,8,9], 4)
// 7 kyu: Testing 1-2-3
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
function number(array) {
    const result = [];
    array.forEach((element, index, self) => {
        result.push(`${index + 1}: ${element}`);
    });
    return result;
}
const test = number(["a", "b", "c"]);
console.log(test);
