//  Bubble constructor function +++++++++++++++++++++++++++++
function Flower(clr) {
  this.angle = new JSVector(90, 0);
  this.vel = new JSVector(Math.random()*0.05, Math.random()*0.05);
  this.amp = new JSVector(Math.random()*canvas.width/2, Math.random()*canvas.height/2);
  this.clr = clr;
  this.loc = new JSVector(100,100)
}

//  placing methods in the prototype (every bubble shares functions)
Flower.prototype.run = function() {
  this.update();
  this.render();
}

// check if this bubble is overlapping any other bubble


// draw the bubble on the canvas
Flower.prototype.render = function() {
    let ctx = game.ctx;
    let x =  Math.sin(this.angle.x)*this.amp.x;
    let y = Math.sin(this.angle.y)*this.amp.y;
    ctx.strokeStyle = this.clr;
    ctx.save();
    ctx.beginPath();
    ctx.translate(canvas.width/2,canvas.height/2);
    ctx.lineTo(this.loc.x,this.loc.y);
    ctx.arc(x, y, 20, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}


// Move the bubble in a random direction
Flower.prototype.update = function() {
  if (!game.gamePaused) {
    this.angle.add(this.vel);
  }
}


// When a bubble hits an edge of the canvas, it wraps around to the opposite edge.
Flower.prototype.checkEdges = function() {
  let canvas = game.canvas;
  if (this.loc.x > canvas.width) this.vel.x = -this.vel.x; // wrap around from right to left
  if (this.loc.x < 0) this.loc.x = this.vel.x = -this.vel.x; // wrap around from left to right
  if (this.loc.y > canvas.height) this.vel.y = -this.vel.y; // wrap around from bottom to top
  if (this.loc.y < 0) this.vel.y = -this.vel.y; // wrap around from top to bottom
}
