// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Foxtrot 2023"
// console.log(cohort.split(""))

// a) Your answer: it will turn it into an array with each letter separated by quotes

// b) Verify and explain: that happened, it is because split is a built in method to turn strings into arrays, and we didn't put a space in there to separate the word and numbers, so we just got each letter separated by quotes. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined, there is not a variable set that is named LEARN Student
// b) Verify and explain: exactly that happened, we can't invoke a function to insert a string, we have to set a variable to the function so that it knows what to invoke. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: the array multiplied by two 
// b) Verify and explain: map is iterating through the array and multiplying each value by two so yes we got the array multiplied by two 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: the array, but only the odd numbers 
// b) Verify and explain: filter is a higher order function that filters to say the least through the array to find the ones that satisfy the condition we established, thus, we got the array but only the odd numbers in it. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: nothing
// b) Verify and explain: to invoke an object, you have to console.log(myCodingSkills.languages) but to get the index of the object you do something that I do not know how to do. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// b) Verify and explain:
