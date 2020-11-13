function Particle(x,y){
this.loc = new JSVector(x,y);
this.vel = new JSVector(10,10);
this.acc = new JSVector(0,0);
this.lifespan = 300;
}

Particle.prototype.run = function () {
this.checkEdges();
this.render()
this.update();
};
Particle.prototype.update = function () {
this.loc.add(this.vel);
this.vel.add(this.acc);
this.vel.setMagnitude(5);
this.lifespan = this.lifespan-1;
};
Particle.prototype.render = function () {
let ctx = game.ctx;
ctx.strokeStyle = "rgba(255,255,255,255)"//this.clr;
ctx.fillStyle = "rgba(255,255,255,255)"
ctx.beginPath();
ctx.arc(this.loc.x,this.loc.y, 10, Math.PI*2, 0, false);
ctx.stroke();
ctx.fill();

};
Particle.prototype.checkEdges = function () {
  let canvas = game.canvas;
  if (this.loc.x > canvas.width) this.vel.x = -this.vel.x;
  if (this.loc.x < 0) this.loc.x = this.vel.x = -this.vel.x;
  if (this.loc.y > canvas.height) this.vel.y = -this.vel.y;
  if (this.loc.y < 0) this.vel.y = -this.vel.y;
};

function AllTheParticle(numOfParticles) {
this.particles = [];
for(var i=0; i>numOfParticles; i++){
  this.particles[i] = new Particle(Math.Random(),Math.Random());
  }
}

AllTheParticle.prototype.run = function () {
  for(var i=0; i>this.particles.length; i++0{
    this.particles[i].run();
  })
};
AllTheParticle.prototype.removeDeadBalls = function () {

};
