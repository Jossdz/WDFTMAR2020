// RULES:
// YOU CANNOT CHANGE THE ORDER OF THE CODE.

/********************
1. VARIABLES
********************/ 

// 1.1 Should not be mutable
const cd = {
  name: 'Yeezus',
  artist: 'Kanye West', 
  certifications: 4
}

// Delete this line when you finish
// cd = '💽'

// 1.2 Should be mutable
let price = 20.99
price = 2099

// 1.3 Hoisting
console.log(name)
var name = 'Kanye'

/********************
2. TEMPLATE STRINGS
********************/ 

// 2.1 Refactor
console.log("Hello my name is " + name + " and I'm the greatest human artist of all time.\nAlso, I released the best album ever, called " + cd.name + ' and it has ' + cd.certifications + ' certifications. The price of this piece of art is ' + price + 'USD.')

// YOUR CODE HERE
console.log(`Hello my name is ${name} and I'm the greatest human artist of all time.
Also, I released the best album ever, called ${cd.name} and it has ${cd.certifications} certifications. The price of this piece of ar is ${price} USD
`)

/********************
3. DESTRUCTURING
********************/ 

// 3.1 Object destructuring
const person = {
  name: 'Diego',
  lastname: 'Vazquez',
  occupation: '🤡'
}

// Destructure the properties from the person object
// YOUR CODE HERE
const { name: person_name, lastname, occupation } = person

// 3.2 Array destructuring
const grades = [10, 9, 5, 4]

// Refactor the following syntax using destructuring
let apro1 = grades[0]
let apro2 = grades[1]
let repro1 = grades[2]
let repro2 = grades[3]
// YOUR CODE HERE
const [a1, a2, r1, r2] = grades

/********************
4. SPREAD OPERATOR
********************/

// 4.1 Concat the two arrays into a new array called ironhack
const staff = [
  'Diego', 
  'Joss', 
  'Anahi', 
  'Julian', 
  'Rocio',
  'Lucia',
  'Victor'
]

const students = [
  'Donovan',
  'Kevin',
  'Emma',
  'Vidal',
  'Armando',
  'Eduardo',
  'Francisco'
]

// YOUR CODE HERE
const ironhack = [...staff, ...students]

// 4.2 Sort the numbers, avoiding the mutation
const numbers = [6, 5, 2, 7, 9, 1, 4, 8, 3]
// YOUR CODE HERE
const sorted = [...numbers].sort((a, b) => a < b)

/********************
5. REST PARAMETERS
********************/

// Complete the function, should return the sum of the numbers
const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0)


const sum1 = sum(1, 2, 3, 4, 5)
const sum2 = sum(1, 2)

console.log(sum1, sum2)


