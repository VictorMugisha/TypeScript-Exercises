type MyType = {
    name: string
    kind: string
    values: Array<number>
}

type TestFunction = (...parameters: MyType[]) => boolean

const testFunction: TestFunction = (...params) => {
    const isThereSomething = params.every(_ => _.values.length > 0)
    return isThereSomething
}

const data: MyType = {
    name: "data1",
    kind: "datas",
    values: [1,3,3,4]
}
const data2: MyType = {
    name: "data2",
    kind: "datas",
    values: [1]
}

const found = testFunction(data, data2)
console.log(found)