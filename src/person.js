console.log('person.js is running');

const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 18;

export default (age) => age >= 65;

export {isAdult, canDrink}