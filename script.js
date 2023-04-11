'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Function that displays message status
const displayMessage = function(message) {
	document.querySelector('.message').textContent = message;
};

// Function that plays game
const playGame = function() {
	const guess = Number(document.querySelector('.guess').value);

	if (!guess) {
		displayMessage('No number!');
	} else if (guess === secretNumber) {
		displayMessage('Correct Number!');
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			score -= 1;
			displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('You lost the game!');
			document.querySelector('.score').textContent = 0;
		}
	}
};

// Function to restart game
const resetGame = function() {
	score = 20;
	displayMessage('Start guessing...');
	document.querySelector('.number').textContent = '?';
	document.querySelector('.score').textContent = score;
	document.querySelector('.guess').value = '';
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
};


// Event listeners for checking numbers and restarting game
document.querySelector('.check').addEventListener('click', playGame);
document.querySelector('.again').addEventListener('click', resetGame);






/*
  else if (guess > secretNumber) {
		if (score > 1) {
			score -= 1;
			document.querySelector('.message').textContent = 'Too high!';
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'You lost the game!';
			document.querySelector('.score').textContent = 0;
		}
	} else if (guess < secretNumber) {
		if (score > 1) {
			score -= 1;
			document.querySelector('.message').textContent = 'Too low!';
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'You lost the game!';
			document.querySelector('.score').textContent = 0;
		}
	}
*/
