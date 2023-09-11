// ASSESSMENT 2: Coding Practical Questions with Jest

const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// describe("multiplyByThree", () => {
//     it("returns an array with all the numbers multiplied by 3", () => {
//       const numbersArray1 = [6, 7, 8, 9, 10]
//       // Expected output: [18, 21, 24, 27, 30]
//       const numbersArray2 = [24, 27, 30, 33, 36]
//       // Expected output: [72, 81, 90, 99, 108]
//       expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//       expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//     })
//   })

// b) Create the function that makes the test pass.

// Pseudo code: 
// input: array of numbers
// output: array of same length of each number multiplied by three
// iterate through array using .map
// .map is available on arrays and returns an array of the same length
// each iteration multiplies current value by 3

// const multiplyByThree = (arr) => {
//     return arr.map(num => num * 3)
//   }

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divisibleByThree", () => {
    it("returns wether the number inside the object is evenly divisible by three", () => { 
        expect(divisibleByThree(15)).toEqual("15 is divisible by three")
        expect(divisibleByThree(0)).toEqual("0 is divisible by three")
        expect(divisibleByThree(-7)).toEqual("-7 is not divisible by three")
    })
})
// ReferenceError: divisibleByThree is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: divisibleByThree
// input: an object that contains a number
// output: a string that says wether the number is divisible by three
// process: access the number within the object, then use conditional statements to determine wether the number is divisible by three, return strings 

const divisibleByThree = (number) => {
    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else if (number % 3 !== 0) {
        return `${number} is not divisible by three`
    } 
}
//PASSED


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalizeArray", () => {
    it("returns an array with all the words capitalized", () => {
        expect(capitalizeArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalizeArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

//  ReferenceError: capitalizeArray is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: capitalizeArray
// input: array 
// output: array with all the strings in it capitalized
// process: use .map() to iterate through the array and then use toUpperCase to capitalize the first index of the array then concatenate the remainder of the word

const capitalizeArray = (array) => {
    return array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
}
console.log(capitalizeArray(randomNouns1))


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowel", () => {
    it("logs the index of the first vowel", () => {
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// name: firstVowel
// input: string
// output: number that logs the index of the first vowel
// process: create a for loop that iterates through the string to detect if the string .includes a vowel, then return the index of the first instance, so include the return within the for loop


const firstVowel = (string) => {
    for (let index = 0; index < string.length; index++){
       if ("aeiou".includes(string[index])) {
        return (index)
       }
    }
}

// TEST PASSED
