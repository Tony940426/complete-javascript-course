'use strict';
// document.querySelector('.message').textContent = "New Content"
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.again').addEventListener('click', function(){
  score = 20
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.number').style.width = "15rem";
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
});

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  if(!guess) {
    document.querySelector('.message').textContent = "No Number! Please Enter Your Guess...";
  } else if(guess === secretNumber){
    document.querySelector('.message').textContent = "🎉 Correct Guess!!!!"
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = "green";
    document.querySelector('.number').style.width = "30rem";
  } else if (guess < secretNumber){
    if (score > 1){
        score -= 1
        document.querySelector('.message').textContent = "✖ Your Guess Is Too Low!"
        document.querySelector('.score').textContent = score;
    }else {
      document.querySelector('.message').textContent = "😑GAME OVER!"
      document.querySelector('.score').textContent = 0;
    }
  }else if (guess > secretNumber){
    if (score > 1){
    score -= 1
    document.querySelector('.message').textContent = "✖ Your Guess Is Too High!"
    document.querySelector('.score').textContent = score;
    }else {
      document.querySelector('.message').textContent = "😑GAME OVER!"
      document.querySelector('.score').textContent = 0;
    }
  }
});
