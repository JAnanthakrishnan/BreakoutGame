class Paddle {
  constructor() {
    this.x = canvas.width / 2 - 40;
    this.y = canvas.height - 21;
    this.l = 100;
    this.b = 10;
    this.speed = 8;
    this.dx = 0;
  }
  draw() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.l, this.b);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = "#00953d";
  }
  update() {
    this.x += this.dx;
    if (this.x + this.l > canvas.width) {
      this.x = canvas.width - this.l;
    }
    if (this.x < 0) {
      this.x = 0;
    }
  }
  moveLeft() {
    this.dx = -this.speed;
  }
  moveRight() {
    this.dx = this.speed;
  }
  stop() {
    this.dx = 0;
  }
  check(ball) {
    if (
      ball.x - ball.r > this.x &&
      ball.x + ball.r < this.x + this.l &&
      ball.y + ball.r > this.y
    ) {
      ball.dy = ball.speed;
    }
  }
}
