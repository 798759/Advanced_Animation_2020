function Boid(x, y) {
  this.loc = new JSVector(x, y);
  let dx = Math.random() * 4 - 2;
  let dy = Math.random() * 4 - 2;
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0, 0);
  this.maxSpeed = 10;
  this.maxForce = 10;
  this.scl = 10;
  this.clr = "rgba(255,100,50)"
}

Boid.prototype.run = function() {
  this.render()
  this.update();
  this.checkEdges();

};

Boid.prototype.update = function() {
  this.loc.add(this.vel);
  this.vel.add(this.acc);
  this.flock(game.boidSystem);

};
Boid.prototype.flock = function(boids) {
  var sep = this.separate(boids);
  var ali = this.align(boids);
//  var coh = this.cohesion(boids);

  sep.multiply(1.5);
  ali.multiply(1.0);
  //coh.multiply(1.0);

  this.acc.add(sep);
  //this.acc.add(ali);
  //this.acc.add(coh);


}
Boid.prototype.separate = function(boids){
  var sep = new JSVector(0,0);
  for(var i=0; i<boids.length; i++){
    if(boids[i]!=this){
      var distance = this.loc.distance(boids[i].loc);
      if(distance<20){
        var sepForce = JSVector.subGetNew(this.loc,boids[i].loc);
        sepForce.normalize();
        sep.add(sepForce);
      }
    }
  }
  return(sep);

}

Boid.prototype.align = function() {
  var sum = new JSVector(0, 0);

}

Boid.prototype.cohesion = function(boids) {
  var neighbordist = 50;
  var sum = new JSVector(0, 0);
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    if (boids[i].loc != boids.loc) {
      var d = JSVector.distance(this.loc, boids[i]);
      if (d > 0 && d < neighbordist) {
        sum.add(boids[i]);
        count++;
      }
    }
    if (count > 0) {
      sum.divide(count);
      return this.seek(sum);
    } else {
      return new JSVector(0, 0);
    }
  }
}






Boid.prototype.render = function() {
  let ctx = game.ctx;
  ctx.save()
  ctx.translate(this.loc.x, this.loc.y);
  ctx.rotate(this.vel.getDirection() + Math.PI / 2);
  ctx.beginPath()
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.moveTo(0, -this.scl)
  ctx.lineTo(-this.scl, this.scl);
  ctx.lineTo(0, 0);
  ctx.lineTo(this.scl, this.scl);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.restore();


}

Boid.prototype.checkEdges = function() {
  let canvas = game.canvas;
  if (this.loc.x > canvas.width) {
    this.loc.x = 0;
  } else if (this.loc.x < 0) {
    this.loc.x = canvas.width;
  }
  if (this.loc.y > canvas.height) {
    this.loc.y = 0;
  } else if (this.loc.y < 0) {
    this.loc.y = canvas.height;
  }
}
