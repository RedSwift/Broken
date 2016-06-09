// declarations
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var moveY = 10;
var moveX = 10;

var bricks = {
  color: 'red',
  widthX: canvas.width / 2,
  heightY: 10,
  brickWidth: 20,
  brickHeight: 20,
  draw: function () {
    for (var i = 0; i < 60; i += 20) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.widthX, this.heightY + i, this.brickWidth, this.brickHeight);
    }
  }
};

$(function () {
  $(document).keydown(function (e) {
    if (e.keyCode === 37) {
      bricks.widthX -= moveX;
      console.log('left pressed!');
    } else if (e.keyCode === 39) {
      bricks.widthX += moveX;
      console.log('right pressed!');
    }

  });
});
// -------------------logic--------------------
// Draw bricks function
function drawBricks () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // collisionDetection
  if (bricks.heightY + 70 > canvas.height) {
    // log and reset height
    moveY = bricks.heightY - 70;
    var newY = moveY + 70;
    moveY = 10;
    bricks.heightY = 10;
    // log and reset width
    moveX = bricks.widthX + 20;
    var newX = moveX - 20;
    moveX = 10;
    bricks.widthX = canvas.width / 2;
  } else {
    bricks.heightY += moveY;
  }
  bricks.draw();
  // loop and draw old bricks
  // setInterval(function () {
  //   if (newY) {
  //     ctx.fillStyle = 'red';
  //     ctx.fillRect(newX, newY, 20, 70);
  //   }
  // }, 100);
}
// setInterval(drawBricks, 100);
