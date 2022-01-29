
/*
Example problem

Write a function that takes in a string and returns that string prepended with "Hello "
and ends with "!"

Sample Input: "Simon"
Sample Output: "Hello Simon!"

Sample call: sayHello("Simon");
*/

function sayHello(name) {
    return "Hello " + name + "!";
}


// If Statements

/* 
Write a function that returns True if the input number is positive, False if is not

Sample Input: 2
Sample Output: True

Sample Input: -30
Sample Output: False

Sample call: isPositive(2);
*/

function isPositive(number) {

}

/* 
Write a function that returns True if the input number is even, False if is not

Sample Input: 2
Sample Output: True

Sample Input: 1
Sample Output: False

Sample call: isEven(3);
*/

function isEven(number) {

}

// For Loops

/*
Write a function that takes an array of numbers and returns the maximum value in that array

Sample Input: [13, 3, 30, 44.5]
Sample Output: 44.5

Sample Call: findMax([13, 3, 30, 44.5])
*/

function findMax(array_of_numbers) {

}

// Write a function that takes a number n and returns a string of the sequence of numbers up to n from 0

// While Loops

/*
Write a function that starts at 0 and returns the sum of the sequence up to that number

Sample Input: 6
Sample Output: 21

(because 0+1+2+3+4+5+6 = 21)

*/
function sumUpTo(target) {

} 

// Follow up: Write the same function using a for loop
function sumUpToForLoop(target) {

} 
export { isEven, isPositive, sayHello, sumUpTo, sumUpToForLoop, findMax };