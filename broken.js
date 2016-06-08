// declarations
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var moveHeight = 10;
var movingHeight = 10;
var brickHeight = 70;
var startWidth = canvas.width / 2;
// -------------------logic--------------------
// Draw bricks function
function drawBricks () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRedBricks();
  // collisionDetection
  if (moveHeight + brickHeight > canvas.height) {
    movingHeight = movingHeight - 70;
  } else {
    moveHeight += movingHeight;
  }
}

// function for drawing 3 bricks of the same color
function drawRedBricks () {
  for (var i = 0; i < 60; i += 20) {
    ctx.beginPath();
    ctx.rect(startWidth, moveHeight + i, 20, 20);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}

// setInterval(drawBricks, 100);
var block = {
  blockHeight: 20,
  blockWidth: 20
};
var gridColumnCount = 10;
var gridRowCount = 20;
var grid = [];
for (var i = 0; i < gridColumnCount; i++) {
  grid[i] = [];
  for (var r = 0; r < gridRowCount; r++) {
    grid[i][r] = block;
  }
}
