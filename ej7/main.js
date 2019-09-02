'use strict';
const times = [56, 9, 45, 28, 35];
 const suma = (acc, time)=>  acc +time;

const mediaTimes= times.reduce(suma,0)/times.length;
console.log(mediaTimes)

