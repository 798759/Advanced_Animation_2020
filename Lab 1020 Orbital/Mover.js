function Mover(x, y, dx, dy, r, c, n){
this.loc = new JSVector(x,y);
this.vel = new JSVector(dx,dy);
this.acc = new JSVector(0,0);
this.rad = r;
this.ornitAngle = Math.random()*Math.pi;
this.clr = c;
this.oberiters = [];

}

Mover.prototype.run = function(){

}

Mover.prototype.render = function () {

};
