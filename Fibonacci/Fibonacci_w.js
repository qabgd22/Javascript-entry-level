// Fibonacci array with while loop
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 .....
// Фибуначијев низ

console.log("Using while loops");
let Fpr = 0, Fsl = 1, F;
console.log("Fibonacci series less than 100000");
while(Fpr<100000)
{
	console.log(Fpr);
	F = Fpr+Fsl;
	Fpr = Fsl;
	Fsl = F;
}