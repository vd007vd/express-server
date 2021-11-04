import {diamond, equilateral} from './patterns/index.js';
import hasPermission from './utils/permissions.js';
import validateUsers from './utils/validation.js'
import {users} from './constants'

let input = process.argv.slice(2);
export const InputNumber = +input[0];

// Patterns
diamond(InputNumber);
equilateral(InputNumber);

// permission
const result = hasPermission('getUsers','trainer','write');
console.log(result);

//validation
validateUsers(users)
