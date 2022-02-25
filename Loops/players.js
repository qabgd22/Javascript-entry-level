let players = ["Messi", "Ronaldo", "Nedy", "Kante"];
let i = players.length-1;

while (i>=0) {
    process.stdout.write(players[i] + " "); //print in one line
	i--;
}

console.log("\n");

i=0;
while (i<players.length) {
    process.stdout.write(players[i] + " "); //print in one line
	i++;
}
