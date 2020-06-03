const canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
let score = 0;
let brickWidth = 20;
let brickLength = 70;
let yoff = 60;
let xoff = 45;
let bricks = [];
let gap = 10;
let life = 3;

function drawScore() {
  ctx.font = "20px Iosevka";
  ctx.fillText(`Score : ${score}`, canvas.width - 110, 30);
}
function drawLives() {
  ctx.font = "20px Iosevka";
  ctx.fillText(`Lifes : ${life}`, 20, 30);
}

let ball = new Ball();
let paddle = new Paddle();

// let cols = Math.floor(canvas.width / brickLength);
// let rcol = Math.ceil(((cols + 1) * gap + xoff) / brickLength);
// let rows = Math.floor(canvas.height / brickWidth / 2);
// let rrow = Math.ceil(((rows + 1) * gap + yoff) / brickWidth);
// cols -= rcol;
// rows -= rrow;
let cols = 9;
let rows = 5;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    bricks.push(
      new Brick(j * (brickLength + gap) + xoff, i * (brickWidth + gap) + yoff)
    );
  }
}
function drawBricks() {
  for (let brick of bricks) {
    brick.draw();
  }
}
function checkBricks() {
  for (let brick of bricks) {
    brick.check(ball);
  }
}
function showAllBricks() {
  for (let brick of bricks) {
    brick.visible = true;
  }
}

function keyDown(e) {
  if (e.key == "ArrowRight" || e.key == "Right") {
    paddle.moveRight();
  }
  if (e.key == "ArrowLeft" || e.key == "Left") {
    paddle.moveLeft();
  }
}
function keyUp(e) {
  paddle.stop();
}
document.addEventListener("keyup", keyUp);
document.addEventListener("keydown", keyDown);
function drawPaddle() {
  paddle.draw();
  paddle.update();
  paddle.check(ball);
}
function drawBall() {
  ball.draw();
  ball.move();
  ball.collision();
}
//Draw and update

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawScore();
  drawLives();
  drawPaddle();
  drawBall();
  drawBricks();
  checkBricks();
  requestAnimationFrame(update);
}
update();
