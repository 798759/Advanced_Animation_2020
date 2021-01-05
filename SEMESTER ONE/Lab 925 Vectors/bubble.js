//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, dx, dy, rad, clr){
    this.vector = new JSVector(x,y);
    this.vel = new JSVector(dx,dy);
    this.rad = rad;///2;
    this.clr = clr;
    this.isOverlapping = false;
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
    for(let i = 0; i < b.length; i++){ // for all the bubbles
       if(this !== b[i]){   // if not this bubble
         let d = this.vector.distance(b[i].vector);
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
        ctx.arc(this.vector.x,this.vector.y, this.rad, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
    }else{
        ctx.strokeStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.vector.x,this.vector.y, this.rad, Math.PI*2, 0, false);
        ctx.stroke();
    }

  }

// Move the bubble in a random direction
Bubble.prototype.update = function(){
    if(!game.gamePaused){
      this.vel.x = Math.random()*6-3;
      this.vel.y = Math.random()*6-3;
      this.vector.x += this.vel.x;
      this.vector.y += this.vel.y;
    }
  }

// When a bubble hits an edge of the canvas, it wraps around to the opposite edge.
Bubble.prototype.checkEdges = function(){
    let canvas = game.canvas;
    if(this.vector.x > canvas.width)  this.vector.x = 0; // wrap around from right to left
    if(this.vector.x < 0)  this.vector.x = canvas.width; // wrap around from left to right
    if(this.vector.y > canvas.height)  this.y = 0; // wrap around from bottom to top
    if(this.vector.y < 0)  this.vector.y = canvas.height; // wrap around from top to bottom
  }
