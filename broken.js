// declarations
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var movingHeight = 10;
var moveY = 10;

var bricks = {
  color: 'red',
  widthX: canvas.width / 2,
  heightY: 10,
  brickWidth: 24,
  brickHeight: 24,
  draw: function () {
    for (var i = 0; i < 60; i += 20) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.widthX, this.heightY + i, this.brickWidth, this.brickHeight);
    }
  }
};

// -------------------logic--------------------
// Draw bricks function
function drawBricks () {
  ctx.clearRect(bricks.widthX, bricks.heightY - 60, 24, 70);
  // collisionDetection
  if (bricks.heightY + 70 > canvas.height) {
    moveY = bricks.heightY - 70;
    var newY = moveY;
    moveY = 10;
    bricks.heightY = 10;
  } else {
    bricks.heightY += moveY;
  }
  bricks.draw();
  // loop and draw old bricks
  if (newY) {
      ctx.fillStyle = 'red';
      ctx.fillRect(canvas.width / 2, newY, 24, 60);
      console.log('this is working');
  }
}

setInterval(drawBricks, 100);
