//Print a series of 10 random numbers from an arbitrary range and then even members of the sequence 

let niz = [];
let even = [];
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

for (let i = 0; i < 10; i++){
    niz.push(getRandomNumberBetween(20,400));
}
console.log('Random sequence of 10 numbers from range:\n' + niz.join(', '));

function evenNumbers(){
    for (var i = 0; i < niz.length; i++) { 
        if ((niz[i] % 2) === 0) {
        even.push(niz[i]);
        }
    }
console.log('\nThe even numbers of the array:\n' + even.join(', '));
}
evenNumbers();

