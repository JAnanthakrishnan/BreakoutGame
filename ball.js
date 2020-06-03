class Ball {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.r = 10;
    this.speed = -4;
    this.dx = 4;
    this.dy = -4;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = "#0095dd";
    ctx.fill();
    ctx.closePath();
  }
  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
  collision() {
    if (this.x + this.r > canvas.width || this.x - this.r < 0) {
      this.dx *= -1;
    }
    if (this.y - this.r < 0) {
      this.dy *= -1;
    }
    if (this.y + this.r > canvas.height) {
      life--;
      if (life === 0) {
        showAllBricks();
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.speed = -4;
        this.dx = 4;
        this.dy = -4;
        score = 0;
        life = 3;
      }
      else{
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.speed = -4;
        this.dx = 4;
        this.dy = -4;
      }
    }
  }
}
