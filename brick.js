class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.l = brickLength;
    this.w = brickWidth;
    this.visible = true;
  }
  draw() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, brickLength, brickWidth);
    ctx.fillStyle = this.visible ? "#0095dd" : "transparent";
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = "#00953d";
  }
  check(ball) {
    if (this.visible) {
      if (
        ball.x - ball.r > this.x &&
        ball.x + ball.r < this.x + this.l &&
        ball.y + ball.r > this.y &&
        ball.y - ball.r < this.y + this.w
      ) {
          ball.dy*=-1
        this.visible = false;
        score++;
      }
    }
  }
}
