/* eslint-disable no-console */
/* eslint-disable no-debugger */
import numeral from 'numeral';
import './index.css';

const courseValue = numeral(1080).format('$0,0.0');
debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);