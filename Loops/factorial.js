//Calculate the factorial of a given number 
const prompt = require('prompt-sync')();
let product = 1;
let n = prompt("Enter n: ");
n = Math.round(n);
	
for(let i=2; i<=n; i++){
	product = product*i;	
}
		
console.log("The factorial of number " + n + " : " + product);
	