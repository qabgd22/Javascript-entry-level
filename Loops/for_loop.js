let GroupA = new Array("Serbia", "Portugal", "Republic of Ireland", "Luxembourg", "Azerbaijan");
console.log("Using for loops: \n");
for (i=0; i<GroupA.length; i++){
	console.log(i+1 +". " + GroupA[i]);
}
console.log("\nSorted ascending:");
GroupA.sort();
console.log(GroupA + " ");
