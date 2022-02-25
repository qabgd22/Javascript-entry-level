const prompt = require('prompt-sync')();

let inputNumber = Number(prompt('Enter a number: '));

if (inputNumber<0)
	{
		console.log("This is negative number")
	}
else if (Number.isNaN(inputNumber))
	{
		console.log("Wrong input. No number entered.")
	}
else if (inputNumber==0)
	{
		console.log("This is zero")
	}
else if (inputNumber%2==0)
	{ 
		console.log("This is even number")
	}
else
	{
		console.log ("This is odd number")
	}