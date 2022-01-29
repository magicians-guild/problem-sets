import {findMax} from './control_flow.js';
import assert from 'assert';

assert(findMax([1,2,3,4,0,10,15,2]) === 15);
assert(findMax([1,2,-33,4,0,10,15,2]) === 15);

console.log("findMax tests passed");