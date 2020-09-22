var canvas;
var ctx;
var radius =30;
var balls =[];
var game;

window.onload = init;
function init(){
  canvas = document.getElementById("cnv");
  canvas.style.border='solid black 2px';
  canvas.style.backgroundColor='rgba(0,24,35)';
  ctx = canvas.getContext('2d');
  GameArea();
  Game();
  animate();
}
function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(var i=0; i<balls.length; i++){
      balls[i].run();
  }
  requestAnimationFrame(animate);
}
