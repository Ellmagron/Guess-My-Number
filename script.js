'use strict';

//Definindo um número aleatório para ser adivinhado

let secreteNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//Configurando uma função para quando usuario digitar e clciar no botão
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Definindo a lógica do jogo
  //Quando nenhum número é digitado
  if (!guess) {
    displayMessage('⛔ No number');

    // Quando o usuário vence
  } else if (guess === secreteNumber) {
    displayMessage('correct number 🥳 ');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(secreteNumber);
    alert('Parabéns, agora você pode me enviar um PIX 🥳');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Quando o numero é maior que a resposta
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      displayMessage(guess > secreteNumber ? '📈 Too high!' : '📉 To low');
      score--;
      displayScore(score);
    } else {
      displayMessage('😢 you lost');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing... ');
  displayScore(score);
  document.querySelector('.guess').value = '';
  displayNumber('?');
  document.querySelector('body').style.backgroundColor = '#222';
  secreteNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secreteNumber);
  document.querySelector('.number').style.width = '15rem';
});
