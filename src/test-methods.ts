namespace TestMethods {

    // This can be re-used
    interface CallbackInterface<Type, ReturnType> {
        (element: Type, index: number): ReturnType
    }

    // Example One Using the predefined interface
    const socialMedias: Array<string> = ["YouTube", "Facebook", "Twitter", "Instagram", "LinkedIn"]

    // socialMedias.forEach(media => {
    //     console.log(media)
    // })

    const mapCallback: CallbackInterface<string, string> = (element: string, index: number): string => {
        return `${element.toUpperCase()} at index: ${index}`
    }

    const otherElements: Array<string> = socialMedias.map(mapCallback)
    // console.log(otherElements)

    // Other Example using the same interface
    const studentAges: number[] = [21, 23, 32, 32, 12, 4, 14]

    const reduceCallback: CallbackInterface<number, number> = (accumulator: number, currentElement: number): number => {
        return accumulator + currentElement
    }

    const sum: number = studentAges.reduce(reduceCallback)
    // console.log("From reduce: ", sum)

    // Other example using filter
    const values: Array<number> = [2, 4, 5, 6, 7, 9, 5, 3, 9, 0, 3, 3]

    const filterCallback: CallbackInterface<number, boolean> = (element: number, index: number): boolean => {
        return element > 5
    }

    const filteredValues: Array<number> = values.filter(filterCallback)
    console.log(filteredValues)


}