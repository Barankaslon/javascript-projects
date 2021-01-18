'use strict';

  let secretNumber = Math.trunc(Math.random()*20)+1;


  let score = 20;
  let highscore = 0;

  const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
  }

  const displayScore = (score) => {
    document.querySelector('.score').textContent = score;
  }


  document.querySelector('.check').addEventListener('click', function() {
      const guess = Number(document.querySelector('.guess').value);
      console.log(guess);

      //When there is no input
      if (!guess) {
          displayMessage('⛔ No Number');

          //When Player wins
      } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }

        //When guess is wrong
      } else if (guess !== secretNumber) {
        if (score > 1) {
          displayMessage (guess > secretNumber ?  'To High!' : 'To Low');
          score--;
          displayScore (score);
        } else {
          displayMessage('You Lost the Game');
          displayScore (0);
          document.querySelector('body').style.backgroundColor = '#ff0000';
        }
        //When guess i s too High
      } 
  });

  document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    displayScore (score);
    document.querySelector('.number').textContent =  '?';
    document.querySelector('.guess').value = '';       
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

  });


