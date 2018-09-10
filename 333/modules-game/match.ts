import {Player} from './player';

export class Match {

  public player1: Player;
  public player2: Player;
  public winner: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  play() {
    this.player1.attack(this.player2);
    this.player2.attack(this.player1);

    if (this.player1.damageReceived > this.player2.damageReceived) {
      this.winner = this.player2;
    } else {
      this.winner = this.player1;
    }

    console.log('The winner is: ', this.winner.name);
  }
}
