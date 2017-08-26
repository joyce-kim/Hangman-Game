// Let's start by grabbing a reference to the <span> below.
var lettersGuessed = document.getElementById("letters-guessed");
var guessContainer = [];
var winCount = document.getElementById("win-count");

document.onkeyup = function(event) {
	guessContainer.push(event.key);
	console.log("eventkey: " + event.key);
	console.log("guessContainer: " + guessContainer.toString());
	winCount.textContent = event.key;
	lettersGuessed.textContent = guessContainer.toString();
};