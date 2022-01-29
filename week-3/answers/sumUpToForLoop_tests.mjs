import {sumUpToForLoop} from './control_flow.js';
import assert from 'assert';

assert(sumUpToForLoop(6) === 21);
assert(sumUpToForLoop(7) === 28);
assert(sumUpToForLoop(4) === 10);
assert(sumUpToForLoop(56) === 1596);

console.log("sumUpToForLoop tests passed");