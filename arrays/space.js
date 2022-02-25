let array = ["Car", "Bus", "Motorcycle"];
let res = ' ';
let array_content = '';

function printWords() {
for (i = 0; i < array.length; i++)
  array_content = array_content + array[i] + res;

console.log(array_content);
}
printWords();
