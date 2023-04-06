'use strict';

//Definindo um número aleatório para ser adivinhado

let secreteNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//Configurando uma função para quando usuario digitar e clciar no botão
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Definindo a lógica do jogo

  //Quando nenhum número é digitado
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number ';

    // Quando o usuário vence
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = 'correct number 🥳 ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secreteNumber;
    alert('Parabéns, agora você pode me enviar um PIX 🥳');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Quando o numero é maior que a resposta
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secreteNumber ? '📈 Too high!' : '📉 To low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 you lost';
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  //Quando o numero é maior que a resposta
  else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 you lost';
      document.querySelector('.score').textContent = 0;
    }

    //Quando o número é menor que a resposta
  } else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 To low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 you lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  secreteNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secreteNumber);
  document.querySelector('.number').style.width = '15rem';
});
