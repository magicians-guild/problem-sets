import {isEven} from './control_flow.js';
import assert from 'assert';

assert(isEven(6) === true);
assert(isEven(0) === true);
assert(isEven(6.4) === false);
assert(isEven(7) === false);
assert(isEven(100) === true);
assert(isEven(1401) === false);

console.log("isEven tests passed");