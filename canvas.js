const canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
let score = 0;
let brickWidth = 20;
let brickLength = 70;
let yoff = 60;
let xoff = 45;
let bricks = [];
let gap = 10;
//Draw the ball
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  r: 10,
  speed: 4,
  dx: 4,
  dy: -4,
};
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
}

const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 21,
  l: 80,
  b: 20,
  speed: 8,
  dx: 0,
};
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.l, paddle.b);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = "#00953d";
}
function drawScore() {
  ctx.font = "20px Arial";
  ctx.fillText(`Score : ${score}`, canvas.width - 100, 30);
}

// let cols = Math.floor(canvas.width / brickLength);
// let rcol = Math.ceil(((cols + 1) * gap + xoff) / brickLength);
// let rows = Math.floor(canvas.height / brickWidth / 2);
// let rrow = Math.ceil(((rows + 1) * gap + yoff) / brickWidth);
// cols -= rcol;
// rows -= rrow;
let cols = 9;
let rows = 5
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    bricks.push(
      new Brick(j * (brickLength + gap) + xoff, i * (brickWidth + gap) + yoff)
    );
  }
}
function drawBricks() {
  for (let i = 0; i < bricks.length; i++) {
    ctx.beginPath();
    ctx.rect(bricks[i].x, bricks[i].y, brickLength, brickWidth);
    ctx.fillStyle = bricks[i].visible?"#0095dd":"transparent";
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = "#00953d";
  }
}

function draw() {
  drawPaddle();
  drawBall();
  drawScore();
  drawBricks();
}
draw();
