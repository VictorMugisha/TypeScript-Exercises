// Numbers of Letters of Numbers

// DESCRIPTION:
// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:

// Examples
// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]


// function getNumberText(arg: number): string {
//     let solution: number | string = 0
//     solution = arg.toString().split('').map(digit => {
//         switch (digit) {
//             case "0":
//                 return "zero"
//             case "1":
//                 return "one"
//             case "2":
//                 return "two"
//             case "3":
//                 return "three"
//             case "4":
//                 return "four"
//             case "5":
//                 return "five"
//             case "6":
//                 return "six"
//             case "7":
//                 return "seven"
//             case "8":
//                 return "eight"
//             case "9":
//                 return "nine"
//         }
//     }).join('')
//     return solution
// }

// function getNumberByText(number: string): number {
//     let solution: number = 0

//     interface NumberStat {
//         numberText: string;
//         digit: number;
//     }

//     const PrimitiveNums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
//     const numberStats: NumberStat[] = [
//         {
//             numberText: 'zero',
//             digit: 0
//         },
//         {
//             numberText: 'one',
//             digit: 1
//         },
//         {
//             numberText: 'two',
//             digit: 2
//         },
//         {
//             numberText: 'three',
//             digit: 3
//         },
//         {
//             numberText: 'four',
//             digit: 4
//         },
//         {
//             numberText: 'five',
//             digit: 5
//         },
//         {
//             numberText: 'six',
//             digit: 6
//         },
//         {
//             numberText: 'seven',
//             digit: 7
//         },
//         {
//             numberText: 'eight',
//             digit: 8
//         },
//         {
//             numberText: 'nine',
//             digit: 9
//         },
//     ];

//     if (number.length >= 6) {

//     }


//     // switch (number) {
//     //     case "zero":
//     //         solution = 0
//     //         break
//     //     case "one":
//     //         solution = 1
//     //         break
//     //     case "two":
//     //         solution = 2
//     //         break
//     //     case "three":
//     //         solution = 3
//     //         break
//     //     case "four":
//     //         solution = 4
//     //         break
//     //     case "five":
//     //         solution = 5
//     //         break
//     //     case "six":
//     //         solution = 6
//     //         break
//     //     case "seven":
//     //         solution = 7
//     //         break
//     //     case "eight":
//     //         solution = 8
//     //         break
//     //     case "nine":
//     //         solution = 9
//     //         break
//     //     default:
//     //         solution = 0
//     // }
//     return solution
// }

// function numbersOfLetters(integer: number): string[] {
//     const solution: string[] = []

//     let word: unknown = getNumberText(integer)
//     solution.push(word as string)





//     // let countWord: number = (word as string).length
//     // let countPreviousWord: number = 0
//     // let prevWord: string = word as string

//     // while (countWord !== countPreviousWord) {
//     //     word = converter(prevWord)
//     //     countPreviousWord = countWord
//     //     countWord = (word as string).length
//     //     solution.push(word as string)
//     // }

//     console.log(solution)

//     return solution
// }


const PrimitiveNums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function numberToWords(num: number): string {
    return num.toString().split('').map(digit => PrimitiveNums[parseInt(digit)]).join('');
}

function numbersOfLetters(num: number): string[] {
    const result: string[] = [];
    let currentWord = numberToWords(num);

    while (!result.includes(currentWord)) {
        result.push(currentWord);
        currentWord = PrimitiveNums[currentWord.length];
    }
    
    // Adding the stable equilibrium state which will be repeated
    result.push(currentWord);
    return result;
}

console.log(numbersOfLetters(60)) // --> ["sixzero", "seven", "five", "four"]
console.log(numbersOfLetters(1)) //--> ["one", "three", "five", "four"]