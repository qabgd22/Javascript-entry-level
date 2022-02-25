//JavaScript Array Methods

let students = new Array("Ana", "Vuk", "Petar", "Ena", "Milan");

Array.prototype.displayItems=function(){
    for (i=0;i<this.length;i++){
        console.log(this[i]);
    }
}

console.log("Students array: ");
students.displayItems();

console.log("\nThe number of items in students array is " + students.length);

console.log("\nThe SORTED students array: ");
students.sort();
students.displayItems();

console.log("\nThe REVERSED students array: ");
students.reverse();
students.displayItems();

console.log("\nThe students array after REMOVING the LAST:");
students.pop();
students.displayItems();

console.log("\nThe students array after PUSH: ");
students.push("Višnja");
students.displayItems();

console.log("\nThe students array after SHIFT: ");
students.shift(); //The shift() method removes the first array element and "shifts" all other elements to a lower index.
students.displayItems();

console.log("\nThe students array after UNSHIFT: ");
students.unshift("Lana"); //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: 
students.displayItems();
