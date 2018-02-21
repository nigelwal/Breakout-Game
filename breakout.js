//Setup the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10

//Set the starting point
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

//Draw the ball
function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawball();
	x += dx;
	y += dy;
	if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
		dx = -dx;
}
	if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
		dy = -dy;
}

setInterval(draw, 10);