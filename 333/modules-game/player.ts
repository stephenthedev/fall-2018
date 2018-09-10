export class Player {

  public name: string;
  public damageReceived: number;

  constructor(name: string) {
    this.name = name;
  }

  attack(player: Player) {
    // get a random number between 0 and 1, * 100, and round down
    const damage = Math.floor(Math.random() * 100);

    console.log(`
      Player ${this.name} is attacking Player ${player.name}!
      Player ${this.name} deals ${damage} damage!
    `);

    player.damageReceived = damage;
  }

  respawn() {
    this.damageReceived = 0;
  }
}
