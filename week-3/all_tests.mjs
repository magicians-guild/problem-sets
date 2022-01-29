//import { isEven, isPositive, sayHello, sumUpTo, sumUpToForLoop, findMax } from './answers/control_flow.js';
import { isEven, isPositive, sayHello, sumUpTo, sumUpToForLoop, findMax } from './control_flow.js';
import assert from 'assert';

assert(sayHello(6) === "Hello 6!");
assert(sayHello("Simon") === "Hello Simon!");
assert(sayHello("") === "Hello !");

console.log("sayHello tests passed");

assert(findMax([1,2,3,4,0,10,15,2]) === 15);
assert(findMax([1,2,-33,4,0,10,15,2]) === 15);

console.log("findMax tests passed");

assert(isEven(6) === true);
assert(isEven(0) === true);
assert(isEven(6.4) === false);
assert(isEven(7) === false);
assert(isEven(100) === true);
assert(isEven(1401) === false);

console.log("isEven tests passed");

assert(isPositive(6) === true);
assert(isPositive(-10) === false);
assert(isPositive(3.5) === true);
assert(isPositive(0) === false);

console.log("isPositive tests passed");


assert(sumUpTo(6) === 21);
assert(sumUpTo(7) === 28);
assert(sumUpTo(4) === 10);
assert(sumUpTo(56) === 1596);

console.log("sumUpTo tests passed");

assert(sumUpToForLoop(6) === 21);
assert(sumUpToForLoop(7) === 28);
assert(sumUpToForLoop(4) === 10);
assert(sumUpToForLoop(56) === 1596);

console.log("sumUpToForLoop tests passed");