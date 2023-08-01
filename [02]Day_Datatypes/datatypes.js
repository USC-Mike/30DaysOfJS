/*
Data Types
*/

// Primative 
let word = 'JavaScript'

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

/* 
Non-Primative mutable or can be modify

Non-primitive data types cannot be compared by value
*/

let nums = [1, 2, 3, 'four']
nums[0] = 10

console.log(nums)

let n1 = [1,5,9,2]
let n2 = [1,5,9,2]

console.log(n1 == n2)

let userOne = {
    name: 'Ange',
    role: 'Designer',
    country: 'Canada'
}

let userTwo = {
    name: 'Ange',
    role: 'Designer',
    country: 'Canada'
}

let userThree = userTwo

console.log(userOne == userTwo)

console.log(userThree == userTwo)

/*
Numbers
*/

// Declaring Numbers
//let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in m/s2
let mass = 72         // mass in Kilogram
//const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

//console.log(age)
console.log(gravity)
console.log(mass)
//console.log(PI)
console.log(boilingPoint)
console.log(bodyTemp)

// Math Objects

const PI = Math.PI

console.log(PI)


// rounding to the closest number
// if above .5 up rounding
// if less .5 down rounding

console.log(Math.round(PI)) // round values to the nearest value
console.log(Math.round(9.81))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))

console.log(Math.min(1, 2, -2, 3, 5))
console.log(Math.max(1, 2, -2, 3, 5))

// Create a random number between 0 to 10
const rand = Math.floor(Math.random() * 11)
console.log(rand)

// Absolute value
console.log(Math.abs(-10))

// Square root
console.log(Math.sqrt(1290))

// Power of
console.log(Math.pow(78, 3))

/*
Strings
*/

let space = ' '
let Fname = 'Kurt Mike'
let Lname = 'Pino'
let age = 22
let language = 'Javascript'
let qoute = "The saying, 'Seeing is Believing' is not correct in 2020."
let qouteWBacktick = `The saying, 'Seeing is Believing' is not correct in 2020.`

console.log(qoute)
console.log(qouteWBacktick)

// String Concatenation or Merging
let nSting = Fname + space + Lname + space + age + space + language + space + qoute

console.log(nSting)

// Concatenating Using Addition Operator ES5 string addition
console.log('I am' + space + Fname + space + Lname + space + age + space + 'yrs old')

// Escape Sequences in Strings
console.log(' I hope everyone is enjoying the 30 Days of JavaScript challenge. \n Do you ?') // \n line break
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')

/*
Template Literals (Template Strings)

  We can inject data as expressions inside a template string. 
  To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign.

  //Syntax use back-tick ``
    `String literal text`
    `String literal text ${expression}`
*/

// Example 1
console.log('3 oranges and 7 tequilla')
let m = 3
let o = 7

console.log(`${m} oranges and ${o} tequilla ${m + o}`)

// Example 2
console.log(`I am ${Fname}, ${age} yrs old. \n I am currently learning ${language} right now`)

/*
String Methods
*/

// 1: Length of a string
console.log(js.length)
console.log(py.length)

// 2: Accessing characters in a string
// We can access each character in a string using its index

let string = 'JavaScript Language'

let firstLetter = string[0]
console.log(firstLetter)

let secondLetter = string[1]
console.log(secondLetter)

let lastLetter = string[string.length - 1]
console.log(lastLetter)

console.log(`The length of the string is ${string.length}`);

// 3: toUpperCase()

console.log(string.toUpperCase());

// 4: toLowerCase()

console.log(string.toLowerCase());

// 5: substr()
/*  
    It takes two arguments, the starting index and number of characters to slice.
*/

console.log(string.substr(4,6))  

// 6: substring()
/*
    It takes two arguments, the starting index and the stopping index 
    but it doesn't include the character at the stopping index.
*/

console.log(string.substring(0, 7));

// 7: split()
/* 
    The split method splits a string at a specified place.
*/
let newString = '30 Days of JavaScript'

console.log(newString.split()) // Changes to an array -> ["30 Days Of JavaScript"]
console.log(newString.split(' ')) // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
console.log(newString.split('')) //Split to an array at each letter