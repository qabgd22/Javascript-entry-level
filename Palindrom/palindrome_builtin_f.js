// Check that the passed argument is a palindrome using built-in functions 

const prompt = require('prompt-sync')();
function checkPalindrome(str) {

    // convert string to an array
    const arrayValues = string.split('');
    console.log(arrayValues);

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();
    console.log(reverseArrayValues);

    // convert array to string
    const reverseString = reverseArrayValues.join('');
    console.log(reverseString);

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input
const string = prompt('Enter a string: ');

checkPalindrome(string);