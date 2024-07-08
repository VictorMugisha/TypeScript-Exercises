"use strict";
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
    console.log(range(10));
    console.log(range(0, 30, 5));
    console.log(range(0));
    console.log(range(1, 4, 0));
    console.log(range(1, 11));
})(TypedCodeWars || (TypedCodeWars = {}));
