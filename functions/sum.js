const prompt = require('prompt-sync')();

var a = prompt ("Enter the first addition : ");
var b = prompt ("Enter the second addition : ");	
		
function sum(a,b){	
    a = parseFloat(a); //The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.
    b = parseFloat(b);
	return a+b;	
}
	
console.log("The sum of two numbers: " + sum(a,b));