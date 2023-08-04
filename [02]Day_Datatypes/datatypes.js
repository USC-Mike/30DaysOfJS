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
let o = 10

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

// 8: trim()
/*
    Removes trailing space in the beginning or the end of a string.
*/

// 9: concat()
/*
    it takes many substrings and joins them.
*/
console.log(Lname.concat("years old"))

// 10: startsWith
/*
    it takes a substring as an argument and it checks if the string starts with that specified substring. 
    It returns a boolean(true or false).

    //syntax
    string.startsWith(substring)
*/

console.log(Fname.startsWith('Kurt'))

// 11: endsWith
/*
    it takes a substring as an argument and it checks if the string ends with that specified substring. 
    It returns a boolean(true or false).

    //syntax
    string.endsWith(substring)
*/

console.log(Lname.endsWith('o'))

// 12: search
/*
    it takes a substring as an argument and it returns the index of the first match. 
    The search value can be a string or a regular expression pattern.
*/
console.log(qoute.search('is'))

/*
    Exercise: Level 1
*/

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = ' 30 Days of JavaScript '

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3, challenge.length));

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3,7));

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// Split the string into an array using split() method
console.log(challenge.split(''));

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

// Split the string at the comma and change it to an array.
let tech = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(tech.split(' '));

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('30 Days of Javascript', '30 Days of Python'));

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('3'));

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('JavaScript'));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:
let newSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(newSentence.indexOf('because'));

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
console.log(newSentence.lastIndexOf('conjunction'));

// Use search to find the position of the first occurrence of the word because in the following sentence
console.log(newSentence.search('You'));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim());

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith(' '));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith(' '));

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.matchAll());

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log(challenge.concat('and'));

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

/*
    Exercise: Level 2
*/

// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let q = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(q);

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let qt = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(qt + 'by Mother Teresa');

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof(parseInt('10')));

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(Math.ceil(parseFloat('9.8')));

// Generate a random number between 0 and 100 inclusively.
const randHundreds = Math.floor(Math.random() * 101)
console.log(randHundreds);

// Generate a random number between 50 and 100 inclusively.
/* 
    You need to know the range of the random.
    Between 50 and 80, the range is 30 (80 - 50 = 30), then you add 1.

    Therefor, the random would look like this :
*/
const randFiftyToHundreds = Math.floor(Math.random() * 51) + 50
console.log(randFiftyToHundreds);

// Generate a random number between 0 and 255 inclusively.
const randTwoFifty = Math.floor(Math.random() * 256)
console.log(randTwoFifty);

// Use console.log() and escape characters to print the following pattern.
/*
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125

    Use \t for tab and \n for new line
*/
let pattern = ' 1\t 1\t 1\t 1\t 1\t \n 2\t 1\t 2\t 4\t 8\t \n 3\t 1\t 3\t 9\t 27\t \n 4\t 1\t 4\t 16\t 64\t \n 5\t 1\t 5\t 25\t 125\t'
console.log(pattern);