//Find the smallest member of the array

const prompt = require('prompt-sync')();
let niz = [-5,3,-6,1,3,-8,9,-15,105];
console.log("Members of array: " + niz.join(', '));

let min = niz[0];

for (let i=1; i<=niz.length; i++) {

if  (niz[i] < min)
	min = niz [i];
}

console.log("The smallest member of array: " + min);