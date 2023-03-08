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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// /* Challenge 2*/

// for (const [i, value] of game.scored.entries()) {
//   console.log(`Goal ${1 + i}: ${value}`);
// }
// let sum = 0;
// for (const value of Object.values(game.odds)) {
//   sum += value;
// }
// const avg = sum / Object.keys(game.odds).length;
// console.log(avg);

// /* Challenge 1 */

// for (const [key, value] of Object.entries(game.odds)) {
//   console.log(`Odd of ${game[key]}: ${value}`);
// }
// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, team2, draw);

// function printGoals(...names) {
//   names.forEach(name => {
//     console.log(name);
//   });
// }

// printGoals('Davies', 'muller', 'lewandowski', 'kimmich');
// printGoals(...game.scored);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// for (const [k, v] of gameEvents) {
//   console.log(`${k < 45 ? '[First Half]' : '[Second Half]'} ${k} : ${v}`);
// }
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const data = document.querySelector('textarea').value;
  const arr = data.split('\n');
  let i = 1;
  for (let [i, val] of arr.entries()) {
    const [first, last] = val.toLowerCase().trim().split('_');

    const output = `${first}${last.replace(last[0], last[0].toUpperCase())} `;
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
});
