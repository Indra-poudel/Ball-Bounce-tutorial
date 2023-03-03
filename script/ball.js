class Ball {
  constructor() {
    this.height = 40;
    this.width = 40;
    this.background = "red";
    this.ballNode = document.createElement("div");
    this.speed = 5;
  }

  render() {
    const ballStyleObject = {
      height: `${this.height}px`,
      width: `${this.width}px`,
      background: this.background,
      ["border-radius"]: `20px`,
    };

    this.ballNode.id = "ball";

    this.ballNode.style =
      this.ballNode.style.cssText +
      convertStyleObjectToStyleString(ballStyleObject);
  }
}
