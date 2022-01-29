import {sayHello} from './control_flow.js';
import assert from 'assert';

assert(sayHello(6) === "Hello 6!");
assert(sayHello("Simon") === "Hello Simon!");
assert(sayHello("") === "Hello !");

console.log("sayHello tests passed");