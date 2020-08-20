console.log('hello webpack')

console.log(1 + 2);


// ES6 module import/export ===========================================
// Import default and multiple functions
// default import must not be more than one
import squarePlusAdd, {
    // Name import must be exact with export name
    add,
    square
} from '../add';

// export file name can be changed when importing if it is a default import
// import multiply from '../multiply'
import resultMultiply from '../multiply'

console.log(add(1, 2, 3), square(3), squarePlusAdd(3, 1), resultMultiply(1, 2, 3));

// import {
//     firstName,
//     lastName
// } from '../sample'
// console.log(firstName, lastName)

// Or use * for all import files and it returns as an object
import * as fullName from '../sample'

console.log(fullName.firstName)