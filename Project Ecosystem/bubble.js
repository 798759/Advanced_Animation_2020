//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, dx, dy, rad, clr) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0, 0);
  this.rad = rad; ///2;
  this.clr = clr;
  this.isOverlapping = false;
  this.center = new JSVector(440, 440);
  this.clr = "rgba(255,255,255,255)"
}

//  placing methods in the prototype (every bubble shares functions)
Bubble.prototype.run = function() {
  this.checkEdges();
  this.update();
  this.render();
}

// check if this bubble is overlapping any other bubble


// draw the bubble on the canvas
Bubble.prototype.render = function() {
  let ctx = game.ctx;
  // color depends on whether this bubble overlaps any oher bubble
  ctx.strokeStyle = "rgba(255,255,255,255)" //this.clr;
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, this.rad, Math.PI * 2, 0, false);
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = this.clr;
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, this.rad, Math.PI * 2, 0, false);
  ctx.stroke();
}


// Move the bubble in a random direction
Bubble.prototype.update = function() {
  let b = game.bubbles;
  if (!game.gamePaused) {
    if (attraction == false) {
      this.acc = JSVector.subGetNew(this.loc, mouseLoc);
    } else {
      this.acc = JSVector.subGetNew(mouseLoc, this.loc);
    }
    this.acc.multiply(0.1);
    this.acc.normalize();
    this.vel.add(this.acc);
    this.vel.limit(3);
    this.loc.add(this.vel);
  }
}


// When a bubble hits an edge of the canvas, it wraps around to the opposite edge.
Bubble.prototype.checkEdges = function() {
  let canvas = game.canvas;
  if (this.loc.x > canvas.width) this.vel.x = -this.vel.x; // wrap around from right to left
  if (this.loc.x < 0) this.loc.x = this.vel.x = -this.vel.x; // wrap around from left to right
  if (this.loc.y > canvas.height) this.vel.y = -this.vel.y; // wrap around from bottom to top
  if (this.loc.y < 0) this.vel.y = -this.vel.y; // wrap around from top to bottom
}