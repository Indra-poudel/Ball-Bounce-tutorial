class Game {
  constructor() {
    this.playground = new Playground();
  }

  render() {
    this.playground.render();
  }

  play() {
    this.render();
  }
}

const game = new Game();
game.play();
