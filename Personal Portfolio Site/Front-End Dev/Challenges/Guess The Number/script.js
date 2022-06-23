'use strict';

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

//Creating a function for repeated code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Always assuming there is no input
  if (!guess) {
    displayMessage('No number!');
  }

  if (score > 1) {
    // The game itself:
    if (guess === secretNumber) {
      // When a player wins
      displayMessage('Correct!');

      //Highscore feature:
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      document.querySelector('.number').textContent = secretNumber;

      //Changing color
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      // When guess is different than guessed num
    } else if (guess !== secretNumber) {
      displayMessage(guess < secretNumber ? 'Go Higher' : 'Go Lower');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    // When you lose:
    displayMessage('You lost!');

    // Changing it to zero, because it will get stuck on one
    document.querySelector('.score').textContent = 0;

    // Changing the background color and the number width box
    document.querySelector('body').style.backgroundColor = '#B7121F';
    document.querySelector('.number').style.width = '30rem';

    //Revealing the number
    document.querySelector('.number').textContent = secretNumber;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Restoring the score
  score = 20;
  document.querySelector('.score').textContent = score;

  //Restoring the 'secret number'
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  console.log(secretNumber);

  //Restoring the message
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //Restoring the original background color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
