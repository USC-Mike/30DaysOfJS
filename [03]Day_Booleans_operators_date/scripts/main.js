/*
Booleans

A boolean data type represents one of the two values:true or false. Boolean value is either true or false. 
The use of these data types will be clear when you start the comparison operator. 
Any comparisons return a boolean value which is either true or false.
*/

let isRaining = false
let isHungry = true
let isSingle = true
let trueValue = 1 < 8
let falseValue = 3 > 1


// Undefined
let firstName
console.log(firstName);

// Null
let empty = null
console.log(empty);

/*
Operators
    Addition(+): a + b
    Subtraction(-): a - b
    Multiplication(*): a * b
    Division(/): a / b
    Modulus(%): a % b
    Exponential(**): ** 
*/

let numOne = 9
let numTwo = 7
let numThree = 9

let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numOne
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(`numberOne = ${numOne}`);
console.log(`numberTwo = ${numTwo}`);
console.log(`Sum = ${sum}`);
console.log(`Subtract = ${diff}`);
console.log(`Multiply = ${mult}`);
console.log(`Divide = ${Math.floor(div)}`);
console.log(`DivideRoundOf = ${Math.ceil(div)}`);
console.log(`Modulo = ${remainder}`);

//I'm okay, just less interested

/*
Comparison Operators

    Equal in value only: (==)
    Equal in value and datatype: (===)
    NOT Equal: (!=)
    Greater than: (>)
    Less than: (<)
    Greater than or equal to: (>=)
    Less than or equal to: (<=)
*/

console.log(numOne == numTwo); // False, cuz not equal
console.log(numOne === numTwo); // False, cuz not equal in value but same datatype
console.log(numOne === '1'); // False, cuz not equal in value and datatype

console.log(numOne != numTwo); // TRUE
console.log(numOne != numOne); // FALSE

console.log(numOne > numTwo); // TRUE
console.log(numOne < numTwo); // FALSE

console.log(numOne >= numTwo); // TRUE
console.log(numOne <= numTwo); // FALSE

console.log(numOne <= numThree); // TRUE, cuz it is equal

console.log(numOne > '2'); // TRUE
console.log(numTwo < '7'); // FALSE, cuz

console.log(0 == false);
console.log(0 === false); // FALSE, cuz not equal in datatype

console.log(0 == ''); // TRUE
console.log(0 === ' '); // FALSE
 
console.log(1 == true); // TRUE
console.log(1 === true); // TRUE, not same datatype

console.log(undefined == null); // TRUE
console.log(undefined === null); // FALSE

console.log('apple'.length === 'mango'.length); // TRUE
console.log('mango'.length != 'mango'.length); // FALSE

/*
Logical Operators
    &&(ampersand) , ||(pipe) and !(negation)
*/

// && ampersand operator example (must be both true)
const check1 = 3 > 5 && 2 < 1 // false && false -> false
const check2 = 3 < 1 && 2 > 3 // true && false -> false
const check3 = 5 > 2 && 9 > 10 // true && true -> true

// || pipe or operator example (if it has true, then true)

const check4 = 6 < 2 || 3 < 4 // false || true -> true
const check5 = 5 > 10 || 3 > 5 // false || false -> false
const check6 = 5 > 2 || 4 > 3 // true || true -> true

// ! Negation examples
