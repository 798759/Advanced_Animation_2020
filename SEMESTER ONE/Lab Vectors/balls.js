class Ball{
  constructor(x,y,dx, dy){
    this.x =x;
    this.y=y;
    this.dx =dx;
    this.dy=dy;
    this.radius =30;
  }
  render(){
    ctx.strokeStyle = 'rgba(155,180,50)';
    ctx.fillStyle = 'rgba(155,180, 50)';
    ctx.beginPath();
    ctx.arc( this.x,  this.y,radius,Math.PI*2, 0, false);
    ctx.fill();
    ctx.stroke();
  }
  checkEdges(){
    if(this.x > window.innerWidth ||   this.x < 0)    this.dx = -  this.dx;
    if(this.y> window.innerHeight ||  this.y < 0)    this.dy = -  this.dy;
  }
  move(){
    this.x += this.dx;
    this.y += this.dy;
  }
  run(){
    this.render();
    this.checkEdges();
    this.move();
  }
}
