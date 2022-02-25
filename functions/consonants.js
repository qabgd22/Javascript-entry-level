const prompt = require('prompt-sync')();
let count = 0;

function countConsonants(name)
{
    for(let i=0; i<name.length; i++)
	{
		if(name[i] !== "a" && name[i] !== "e" && name[i] !== "i" && name[i] !== "o" && name[i] !== "u" &&
           name[i] !== "A" && name[i] !== "E" && name[i] !== "I" && name[i] !== "O" && name[i] !== "U" && name[i]!== " ")
		count = count + 1;
			
	}
console.log("Hello " + name + "!!! Your name has " + count + " consonants.");
		
}
let MyName = prompt("Please enter yor name: ");
countConsonants(MyName);