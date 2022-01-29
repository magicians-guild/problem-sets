import {sumUpTo} from './control_flow.js';
import assert from 'assert';

assert(sumUpTo(6) === 21);
assert(sumUpTo(7) === 28);
assert(sumUpTo(4) === 10);
assert(sumUpTo(56) === 1596);

console.log("sumUpTo tests passed");