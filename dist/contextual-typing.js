"use strict";
const testFunction = (...params) => {
    const isThereSomething = params.every(_ => _.values.length > 0);
    return isThereSomething;
};
const data = {
    name: "data1",
    kind: "datas",
    values: [1, 3, 3, 4]
};
const data2 = {
    name: "data2",
    kind: "datas",
    values: [1]
};
const found = testFunction(data, data2);
console.log(found);
