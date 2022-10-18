'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
};

// //Question 1
// const[player1, player2] = game.players

// //Question 2
// const [gk, ...fieldPlayers] = player1;

// //Question 3
// const allPlayers = [...player1, ...player2];

// //question 4
// const player1Final = [...player1, "Thiago", "Coutinho","Periscic"];

// //question 5
// const {odds: {team1, x:draw, team2}} = game
// console.log(game);

// // CHALLENGE #2
// //Question 1
// for(const [i,scorer] of game.scored.entries())console.log(`${i + 1}: is ${scorer}`);

// //Question 2
// const odds = Object.values(game.odds)
// let average = 0;
// for(const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

//Question 3
// const values = Object.entries(game.odds)
// for(const [team, odd] of values) {
//   const teamStr = team === 'x' ? 'draw' : `victoray ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`)
// }
