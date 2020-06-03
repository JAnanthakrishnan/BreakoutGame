const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

//Draw the ball
const ball = {
    x:canvas.width/2,
    y:canvas.height/2,
    r:10,
    speed:4,
    dx:4,
    dy:-4
}
function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2);
    ctx.fillStyle = '#0095dd'
    ctx.fill();
    ctx.closePath();
}
drawBall();


