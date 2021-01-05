function Game(){
    this.ga = new GameArea();
    this.balls =[];
    for(var i=0; i<100; i++){
      this.balls[i] = new Ball(Math.random()*canvas.width,Math.random()*canvas.height,Math.random()*10 - 5,Math.random()*10 - 5);
    }
    this.update = function(){
      for(var i=0; i<balls.length; i++){
        this.balls[i].run();
      }
    }
}
