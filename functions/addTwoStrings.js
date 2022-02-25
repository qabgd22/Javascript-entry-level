function concatenate(first, last) {
    let full;
    full = first + " " + last;
    return full;
 }
function secondFunction() {
    let result;
    result = concatenate('Petar','Petrović'); //call concatenate function and assign value to result
    console.log(result);
 }
 
secondFunction();