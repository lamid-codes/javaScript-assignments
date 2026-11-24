const prompt = require("prompt-sync")();
let loopNumber = 0;
let counter = 0;
let mainNumber = Number(prompt("Enter a number: "));
while (mainNumber != -1) {
	loopNumber += mainNumber;
	counter += 1;
	let average = loopNumber / counter;
	console.log(average);
	mainNumber = Number(prompt("Enter a number: "));
}