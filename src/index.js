import numeral from 'numeral';

const courseValue = numeral(1080).format('$0,0.0');
console.log(`I would pay ${courseValue} for this awesome course!`);