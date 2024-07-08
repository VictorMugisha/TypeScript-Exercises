"use strict";
var TestMethods;
(function (TestMethods) {
    // Example One Using the predefined interface
    const socialMedias = ["YouTube", "Facebook", "Twitter", "Instagram", "LinkedIn"];
    // socialMedias.forEach(media => {
    //     console.log(media)
    // })
    const mapCallback = (element, index) => {
        return `${element.toUpperCase()} at index: ${index}`;
    };
    const otherElements = socialMedias.map(mapCallback);
    // console.log(otherElements)
    // Other Example using the same interface
    const studentAges = [21, 23, 32, 32, 12, 4, 14];
    const reduceCallback = (accumulator, currentElement) => {
        return accumulator + currentElement;
    };
    const sum = studentAges.reduce(reduceCallback);
    // console.log("From reduce: ", sum)
    // Other example using filter
    const values = [2, 4, 5, 6, 7, 9, 5, 3, 9, 0, 3, 3];
    const filterCallback = (element, index) => {
        return element > 5;
    };
    const filteredValues = values.filter(filterCallback);
    console.log(filteredValues);
})(TestMethods || (TestMethods = {}));
