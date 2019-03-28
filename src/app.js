// import './utils.js';
import anythingIWant, { square, add } from './utils.js'; 
import defaultFunction, { isAdult, canDrink} from './person.js';

console.log('app.js is running');

console.log(square(12));
console.log(add(12, 12));
console.log(anythingIWant(100,90)) // anythingIWant is the default export fomr utils, ie subtract

console.log('14 is adult?', isAdult(14));
console.log('14 is can drink?', canDrink(14));
console.log('is senior?', defaultFunction(72));