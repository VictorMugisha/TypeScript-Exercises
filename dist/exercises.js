"use strict";
function log(value) {
    if (typeof value === "string") {
        console.log("The value is string");
    }
    else {
        console.log("The value is number");
    }
}
function isItOdd(value) {
    if (typeof value === "number") {
        return true;
    }
    return false;
}
var Assertion;
(function (Assertion) {
    const everyType = [1, 2, 3, "everything"];
    const numbers = everyType.slice(0, 2);
    const str = everyType[3];
    let anyType = "I know this is string";
    let strFromAny = anyType;
})(Assertion || (Assertion = {}));
