import {isPositive} from './control_flow.js';
import assert from 'assert';

assert(isPositive(6) === true);
assert(isPositive(-10) === false);
assert(isPositive(3.5) === true);
assert(isPositive(0) === false);

console.log("isPositive tests passed");