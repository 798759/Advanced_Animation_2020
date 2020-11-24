function Boid(x,y){
    this.loc = new JSVector(x, y);
    let dx = Math.random()*4-2;
    let dy = Math.random()*4-2;
    this.vel = new JSVector(dx, dy);
    this.acc = new JSVector(0,0);
    this.maxSpeed = game.slider2.value;
    this.maxForce = game.slider1.value;
}

Boid.prototype.run = function () {
this.render()
this.update();
this.checkEdges();
};

Boid.prototype.update = function () {
this.loc.add(this.vel);
this.vel.add(this.acc);

};


Boid.prototype.render = function () {
let ctx = game.ctx;
ctx.strokeStyle = "rgba(255,255,255,255)"//this.clr;
ctx.fillStyle = "rgba(255,255,255,255)"
ctx.beginPath();
ctx.arc(this.loc.x,this.loc.y, 10, Math.PI*2, 0, false);
ctx.stroke();
ctx.fill();

};

Boid.prototype.checkEdges = function(){
  let canvas = game.canvas;
  if (this.loc.x > canvas.width){
    this.loc.x = 0;
  }
  else if(this.loc.x < 0){
    this.loc.x = canvas.width;
  }
  if (this.loc.y > canvas.height){
    this.loc.y = 0;
  }
  else if(this.loc.y < 0){
    this.loc.y = canvas.height;
  }
  }
