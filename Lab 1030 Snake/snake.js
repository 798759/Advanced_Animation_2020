function Snake(numSegments,x,y,dx,dy){
  this.segments = [];
  this.vel = new JSVector(dx,dy)
  this.loc = new JSVector(x,y);
  this.numSegments=numSegments
  for(let i =0; i<this.numSegments; i++){
    this.segments[i]=new JSVector(x+(10*i),y+(10*i));
  }
}

Snake.prototype.run = function () {
  this.move();
  this.render();
  this.checkEdges();

};
Snake.prototype.move = function () {
  this.loc.add(this.vel);
  for(let i =0; i>this.segments.length; i++)
    if(i!=0){
      this.segments[i].loc=this.segments[i-1].loc;
  }
  else{
    this.segments[i].loc= this.loc;
  }
};
Snake.prototype.render = function () {
  let ctx = game.ctx;
  for(let i =0; i<this.segments.length; i++){
    ctx.strokeStyle = "rgba(255,0,0)"//this.clr;
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.segments[i].x,this.segments[i].y, 10, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
  }
  ctx.strokeStyle = "rgba(255,0,0)"//this.clr;
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y, 10, Math.PI*2, 0, false);
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
