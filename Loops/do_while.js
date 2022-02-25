//Print all even numbers less than 100 
console.log("Using do...while loops: ");
let i = 2;
console.log("Even numbers less than 100: ");
do
{
	//console.log(i);
	process.stdout.write(i + " "); // print in one line
	i += 2;
} while(i<100)