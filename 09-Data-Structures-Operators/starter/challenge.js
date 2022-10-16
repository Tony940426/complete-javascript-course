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

//Question 1
const[player1, player2] = game.players
console.log(player1);
console.log(player2);

//Question 2
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//Question 3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//question 4
const player1Final = [...player1, "Thiago", "Coutinho","Periscic"];

//question 5
const {odds: {team1, x:draw, team2}} = game
