function Snake() {
  this.segments = [];
  this.vel = new JSVector(2, 2)
  this.loc = new JSVector(0, 0);
  this.acc = new JSVector(0,0);
  this.numSegments = 15;
  this.dist = 10;
  let distance = 20;
  for (let i = 0; i < this.numSegments; i++) {
    this.segments[i] = new JSVector(this.loc.x - distance, this.loc.y - distance);
    distance = distance - 20;
  }
}

Snake.prototype.run = function() {
  this.move();
  this.render();
  this.checkEdges();
  //this.eat();
  this.moveHead();
};
Snake.prototype.move = function() {
  for (let i=0; i < this.segments.length; i++) {
    if (i===0) {
      this.segments[i] = new JSVector(this.loc.x, this.loc.y);
    }
    if(i!==0){
    var dist = JSVector.subGetNew(this.segments[i],this.segments[i-1]);
    dist.setMagnitude(this.segments.length);
    this.segments[i]=JSVector.addGetNew(this.segments[i-1],dist);
  }
}
}
Snake.prototype.moveHead = function(){
  this.loc.add(this.vel);
  this.vel.add(this.acc);
}

Snake.prototype.render = function() {
  let ctx = game.context1;
  let ctx2 = game.context2;
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
  for (let i = 0; i < this.segments.length; i++) {
    ctx2.lineWidth= 20-i;
    ctx2.lineCap = "round";
    ctx2.strokeStyle = "rgba(255,0,0,.5)" //this.clr;
    ctx2.fillStyle = this.clr;
    ctx2.beginPath();
    //ctx.arc(this.segments[i].x, this.segments[i].y, 10, Math.PI * 2, 0, false);
    ctx2.moveTo(this.segments[i].x,this.segments[i].y);
    if(i!==0){
    ctx2.lineTo(this.segments[i-1].x,this.segments[i-1].y)
  }
    ctx2.stroke();
    ctx2.fill();
  }
  ctx2.strokeStyle = "rgba(255,0,0)" //this.clr;
  ctx2.fillStyle = this.clr;
  ctx2.beginPath();
  //ctx.arc(this.loc.x, this.loc.y, 10, Math.PI * 2, 0, false);
  ctx2.stroke();
  ctx2.fill();

}



Snake.prototype.eat = function(){
  var distanceToBoid=0;
  for(var i=0; i<game.boidSystem.length; i++){
    distanceToBoid=this.loc.distance(game.boidSystem[i].loc);
    if(this.distacneToBoid>20){
      this.acc = JSVector.subGetNew(this.loc,game.boidSystem[i].loc);
    }
    if(this.loc==game.boidSystem[i].loc){
      game.boidSystem[i].splice(x, 1);
    }
  }
}

Snake.prototype.checkEdges = function() {
  let canvas = game.context1;
  if (this.loc.x > canvas.width) this.vel.x = -this.vel.x; // wrap around from right to left
  if (this.loc.x < 0) this.loc.x = this.vel.x = -this.vel.x; // wrap around from left to right
  if (this.loc.y > canvas.height) this.vel.y = -this.vel.y; // wrap around from bottom to top
  if (this.loc.y < 0) this.vel.y = -this.vel.y; // wrap around from top to bottom
}
