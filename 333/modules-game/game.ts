// game.ts
import {Player} from './player';
import {Match} from './match';

console.log('Starting the Modules Game');
console.log('Creating players: Jim, Bob, Jane, Barb');

const jim = new Player('Jim');
const bob = new Player('Bob');
const jane = new Player('Jane');
const barb = new Player('Barb');

const match1 = new Match(jim, jane);
const match2 = new Match(bob, barb);

// Play the first rounds
match1.play();
match2.play();

match1.winner.respawn();
match2.winner.respawn();

// Play the final rounds
const finalMatch = new Match(match1.winner, match2.winner);
finalMatch.play();





//
