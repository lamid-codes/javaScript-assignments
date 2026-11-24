const prompt = require("prompt-sync")();
let number = 90;
let attempts = 0;
let guess = 0;
while (guess != number) {
	guess = prompt("Guess a number (1-100): ");
	attempts++;
	if (guess == number){
		console.log(""correct)
	}else {
		guess = promp("Guess a number (1-100): ")
	}
 }
