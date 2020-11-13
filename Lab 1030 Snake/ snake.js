function Snake(numSegments, x, y, dx, dy) {
  this.segments = [];
  this.vel = new JSVector(dx, dy)
  this.loc = new JSVector(x, y);
  this.numSegments = numSegments
  this.dist = 10;
  let distance = 20;
  for (let i = 0; i < this.numSegments; i++) {
    this.segments[i] = new JSVector(x - distance, y - distance);
    distance = distance - 20;
  }
}

Snake.prototype.run = function() {
  this.move();
  this.render();
  this.checkEdges();
  this.moveHead();
};
Snake.prototype.move = function() {
  for (let i=0; i < this.segments.length; i++) {
    if (i===0) {
      this.segments[i] = new JSVector(this.loc.x, this.loc.y);
    }
    if(i!==0){
    var dist = JSVector.subGetNew(this.segments[i],this.segments[i-1]);
    dist.setMagnitude(20);
    this.segments[i]=JSVector.addGetNew(dist,this.segments[i-1]);
  }
}
}
Snake.prototype.moveHead = function(){
  this.loc.x = this.loc.x+this.loc.x;
  this.loc.y = this.loc.y+Math.sin(this.vel*3.14);
}

Snake.prototype.render = function() {
  let ctx = game.ctx;
  for (let i = 0; i < this.segments.length; i++) {
    ctx.lineWidth= 20-i;
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgba(255,0,0,.5)" //this.clr;
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    //ctx.arc(this.segments[i].x, this.segments[i].y, 10, Math.PI * 2, 0, false);
    ctx.moveTo(this.segments[i].x,this.segments[i].y);
    if(i!==0){
    ctx.lineTo(this.segments[i-1].x,this.segments[i-1].y)
  }
    ctx.stroke();
    ctx.fill();
  }
  ctx.strokeStyle = "rgba(255,0,0)" //this.clr;
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  //ctx.arc(this.loc.x, this.loc.y, 10, Math.PI * 2, 0, false);
  ctx.stroke();
  ctx.fill();
}

Snake.prototype.checkEdges = function() {
  let canvas = game.canvas;
  if (this.loc.x > canvas.width) this.vel.x = -this.vel.x; // wrap around from right to left
  if (this.loc.x < 0) this.loc.x = this.vel.x = -this.vel.x; // wrap around from left to right
  if (this.loc.y > canvas.height) this.vel.y = -this.vel.y; // wrap around from bottom to top
  if (this.loc.y < 0) this.vel.y = -this.vel.y; // wrap around from top to bottom
}
