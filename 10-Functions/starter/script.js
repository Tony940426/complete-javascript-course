'use strict';

// const bookings = []

// const createBooking = function(flightNum, numPassengers = 1, price = 199){
//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('num123');
// createBooking('num125', 2, 800);
// createBooking('num123', 1000)

// const greet = function(greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greetHey = greet("Hello");
// greetHey("Tony");

// const greet = greeting => name => console.log(`${greeting} ${name}`)

// greet('Hello')('Tim');
const poll = {
  question: "What is your favourite programming language",
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    const answer = Number(
      prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write Option Number)`
      )
    )
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++
    console.log(this.answers);
  },
  displayResults(type = 'array'){
    if(type === 'array'){
      console.log(this.answers)
    }else if (type === 'string'){
      console.log(`Poll results are ${this.answers.join(', ')}`)
    }
  },
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.registerNewAnswer()
