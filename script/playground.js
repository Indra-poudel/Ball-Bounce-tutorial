class Playground {
  constructor() {
    this.height = 800;
    this.width = 400;
    this.background = "#cccc";
    this.htmlNode = document.getElementById("playground");
    this.ball = new Ball();
    this.setUpBall();
  }

  setUpBall() {
    const ballPositionStyle = {
      top: `${this.height / 2 - this.ball.height / 2}px`,
      left: `${this.width / 2 - this.ball.width / 2}px`,
      position: "absolute",
    };

    this.ball.ballNode.style =
      convertStyleObjectToStyleString(ballPositionStyle);
  }

  animateBall() {
    setInterval(() => {
      let topPosition = this.ball.ballNode.style.top.split("px")[0];

      // playground surface check
      topPosition = parseInt(topPosition) + this.ball.speed;

      if (topPosition === this.height - this.ball.height) {
        this.ball.speed = -this.ball.speed;
      }

      if (topPosition === 0) {
        this.ball.speed = -this.ball.speed;
      }

      this.moveBall(topPosition);
    }, 1);
  }

  moveBall(newTopValue) {
    this.ball.ballNode.style.top = `${newTopValue}px`;
  }

  render() {
    const playgroundStyleObject = {
      height: `${this.height}px`,
      width: `${this.width}px`,
      background: this.background,
      margin: "auto",
      position: "relative",
    };

    this.htmlNode.style = convertStyleObjectToStyleString(
      playgroundStyleObject
    );

    this.ball.render();

    this.htmlNode.appendChild(this.ball.ballNode);
    this.animateBall();
  }
}
