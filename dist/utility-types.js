"use strict";
var UtilityTypes;
(function (UtilityTypes) {
    const someShape = {
        john: {
            name: "John",
            age: 32
        },
        mike: {
            name: "Mike",
            age: 0
        }
    };
    function positionText(prop) {
        switch (prop) {
            case "left":
                return "Moving left";
            case "center":
                return "Moving center";
            case "right":
                return "Moving right";
            default:
                const _exhaustiveChecks = prop;
                console.log(_exhaustiveChecks);
                return "You seem to have provided incompatible type argument";
        }
    }
    const leftVal = positionText("left");
    const centerVal = positionText("center");
    const rightVal = positionText("right");
    // const somethingElseVal: string = positionText("something Else") // Even if we made all possible checks in the function definition, we are not allowed to call the function with an uncompatible shape argument, if we do that, TypeScript will consider it as an error.
    console.log(leftVal, centerVal, rightVal);
})(UtilityTypes || (UtilityTypes = {}));
