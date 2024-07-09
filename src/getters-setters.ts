class Person {
    private _age: number
    private _name: string

    public get something() {
        return this._age
    }
    public set something(theAge: number) {
        if (theAge > 0) {
            this._age = theAge
        }
    }

    constructor() {
        this._age = 13
        this._name = "Person"
    }
}

const john = new Person()
john.something = 12
console.log(john.something)