const prompt = require("prompt-sync")();
let  numberCollected = prompt("Enter a number: ");
let count = 0;
let sumOfDigits = 0;
let reversedNumber = 0;
while(numberCollected != 0){
	let extractedDigits = numberCollected % 10;
	reversedNumber = (reversedNumber * 10) + extractedDigits;
	count++;
	sumOfDigits = sumOfDigits + extractedDigits;
	numberCollected = numberCollected / 10;
}
if (numberCollected === numberCollected){
		console.log("is a Palindrome");
	} else {
		console.log("is not a Palindrome");
	}