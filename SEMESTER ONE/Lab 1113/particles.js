function Particle(x,y){
this.loc = new JSVector(x,y);
this.vel = new JSVector(Math.random()*2-1,Math.random()*2-2);
this.acc = new JSVector(0,.05);
this.lifespan = Math.random()*300;
}

Particle.prototype.run = function () {
this.render()
this.update();
this.checkEdges();
};
Particle.prototype.update = function () {
this.loc.add(this.vel);
this.vel.add(this.acc);
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
  if (this.loc.x > canvas.width&this.loc.x < 0&this.loc.y > canvas.height&this.loc.y < 0){
    this.lifespan=0;
  }

};

function AllTheParticle(numOfParticles,x,y) {
this.particles = [];
this.loc = new JSVector(x,y)
for(var i=0; i<numOfParticles; i++){
  this.particles[i] = new Particle(this.loc.x,this.loc.y);
  }
}

AllTheParticle.prototype.run = function () {
  for(var i=0; i<this.particles.length; i++){
    this.particles[i].run();
  }
  this.removeDeadParticles();
};
AllTheParticle.prototype.removeDeadParticles = function () {
  for(var i=0; i<this.particles.length; i++){
    if(this.particles[i].lifespan<0){
      this.particles.splice(i,1);
      i--;
      this.addParticle();
    }
    }

};
AllTheParticle.prototype.addParticle = function () {
  this.particles.push(new Particle(this.loc.x,this.loc.y));
};
