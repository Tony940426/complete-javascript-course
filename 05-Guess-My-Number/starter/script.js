'use strict';
// document.querySelector('.message').textContent = "New Content"
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

const changeColor = function(color){
  document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  if(!guess) {
    displayMessage("No Number! Please Enter Your Guess...");
  } else if(guess === secretNumber){
      if(score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    displayMessage("🎉 Correct Guess!!!!");
    changeColor("green")
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = "30rem";
  } else if (guess !== secretNumber){
    if (score > 1){
        score -= 1
        document.querySelector('.message').textContent =
        guess < secretNumber ? "✖ Your Guess Is Too Low!" : "✖ Your Guess Is Too High!"
        document.querySelector('.score').textContent = score;
    }else {
      displayMessage ("😑GAME OVER!")
      changeColor("red");
      document.querySelector('.score').textContent = 0;
    }
  };
});

  document.querySelector('.again').addEventListener('click', function(){
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    changeColor("#222");
    document.querySelector('.number').style.width = "15rem";
  });
