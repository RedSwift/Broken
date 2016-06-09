/* global $ */
// declarations
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var moveY = 10;
var moveX = 10;
var oldBricks = [];

// creating the bricks
function Bricks () {
  this.color = 'red';
  this.widthX = canvas.width / 2;
  this.heightY = 10;
  this.brickWidth = 20;
  this.brickHeight = 20;
}

Bricks.prototype.draw = function () {
  for (var i = 0; i < 60; i += 20) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.widthX, this.heightY + i, this.brickWidth, this.brickHeight);
    ctx.strokeRect(this.widthX, this.heightY + i, this.brickWidth, this.brickHeight);
  }
};
var bricks = new Bricks();

// -------------------logic--------------------
// Draw bricks function
function drawBricks () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // collisionDetection
  if (bricks.heightY + 70 > canvas.height) {
    // log and reset height
    moveY = bricks.heightY - 70;
    moveY = 10;
    // log and reset width
    moveX = bricks.widthX + 20;
    moveX = 10;
    // logging current brick into array and make new bricks
    oldBricks.push(bricks);
    bricks = new Bricks();
  } else {
    bricks.heightY += moveY;
  }
  bricks.draw();
  // loop and draw old bricks
  for (var r = 0; r < oldBricks.length; r++) {
    oldBricks[r].draw();
    // console.log(oldBricks[r]);
    if ((bricks.widthX < oldBricks[r].widthX + 20 && bricks.widthX + 20 > oldBricks[r].widthX) && (bricks.heightY <= oldBricks[r].heightY && bricks.heightY + 60 >= oldBricks[r].heightY)) {
      oldBricks.push(bricks);
      bricks = new Bricks();
    }
  }
}
setInterval(drawBricks, 100);

// key press
$(function () {
  $(document).keydown(function (e) {
    if (e.keyCode === 37 && bricks.widthX > 0) {
      bricks.widthX -= moveX;
    } else if (e.keyCode === 39 && bricks.widthX + 20 < canvas.width) {
      bricks.widthX += moveX;
    } else if (e.keyCode === 40 && bricks.heightY + 70 < canvas.height) {
      bricks.heightY += moveY;
    }
  });
});
