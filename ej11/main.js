'use strict';
const times = [56, 9, 45, 28, 35];
times.sort((a, b) => a - b);
console.log(times);

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
names.sort();
console.log(names);


const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];
runners.sort((a, b) => a.time - b.time);
console.log(runners);