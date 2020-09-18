class Button{
  constructor(x,y size){
    this.x =x;
    this.y=y;
    this.s = size;
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
  render(){
    ctx.strokeStyle = 'rgba(155,180,50)';
    ctx.fillStyle = 'rgba(155,180, 50)';
    ctx.beginPath();
    ctx.arc( this.x,  this.y,this.s,Math.PI*2, 0, false);
    ctx.fill();
    ctx.stroke();
  }
  listener(){
    if(this.mouseX>this.x-this.s&&this.mouseX&&<this.x+this.s&&this.mouseY>this.Y-this.s&&this.mouseY&&<this.y+this.s){
      return true;
    }
  }
}
