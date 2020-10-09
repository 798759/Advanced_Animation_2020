//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, dx, dy, rad, clr){
    this.loc = new JSVector(x,y);
    this.vel = new JSVector(dx,dy);
    this.acc = new JSVector(0,0);
    this.rad = rad;///2;
    this.clr = clr;
    this.isOverlapping = false;
    this.center = new JSVector(canvas.width/2, canvas.height/2);
}

  //  placing methods in the prototype (every bubble shares functions)
Bubble.prototype.run = function(){
    this.checkEdges();
    this.checkOverlapping()
    this.update();
    this.render();
  }

// check if this bubble is overlapping any other bubble
Bubble.prototype.checkOverlapping = function(){
    this.isOverlapping = false;//  default color
    this.clr =  "rgba(255,255,255,255)"
    let b = game.bubbles;
    b[0].clr = "rgba(66, 135, 245)";
    for(let i = 0; i < b.length; i++){ // for all the bubbles
       if(this !== b[i]){   // if not this bubble
         let d = this.loc.distance(b[i].loc);
         if(d < this.rad + b[i].rad){
            this.isOverlapping = true;
            this.clr =  "rgba(100,220,55,10)"
         }
       }
    }

  }

// draw the bubble on the canvas
Bubble.prototype.render = function(){
    let ctx = game.ctx;
    // color depends on whether this bubble overlaps any oher bubble
    if(this.isOverlapping){
        ctx.strokeStyle = "rgba(255,255,255,255)"//this.clr;
        ctx.fillStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.loc.x,this.loc.y, this.rad, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
    }else{
        ctx.strokeStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.loc.x,this.loc.y, this.rad, Math.PI*2, 0, false);
        ctx.stroke();
    }

  }

// Move the bubble in a random direction
Bubble.prototype.update = function(){
  let b = game.bubbles;
  var distanceToCenter;
    if(!game.gamePaused){
distanceToCenter = this.loc.distance(this.center);
  if(distanceToCenter <800){
    this.acc = JSVector.subGetNew(this.center,this.loc);
    this.acc.normalize();
    this.acc.multiply(0.1);
  }
  if(distanceToCenter>150){
    this.acc= -this.acc;
  }
  this.vel.limit(5);
  this.vel.add(this.acc);
  this.loc.add(this.vel);

    }
  }


// When a bubble hits an edge of the canvas, it wraps around to the opposite edge.
Bubble.prototype.checkEdges = function(){
    let canvas = game.canvas;
    if(this.loc.x > canvas.width)  this.vel.x = -this.vel.x; // wrap around from right to left
    if(this.loc.x < 0)  this.loc.x = this.vel.x = -this.vel.x; // wrap around from left to right
    if(this.loc.y > canvas.height)  this.vel.y = -this.vel.y; // wrap around from bottom to top
    if(this.loc.y < 0)  this.vel.y = -this.vel.y; // wrap around from top to bottom
  }
