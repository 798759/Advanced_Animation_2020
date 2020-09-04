var canvas;
var ctx;
var radius =30;
var balls =[];
//  intialize the Canvas and context
window.onload = init;


function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,24,35)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  loadBalls(10);
  animate();
}



function animate(){
for(var i=0; i<balls.length; i++){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(155,180,50)';
    ctx.fillStyle = 'rgba(155,180, 50)';
    ctx.beginPath();
    ctx.arc( balls[i].x,  balls[i].y,radius,Math.PI*2, 0, false);
    ctx.fill();
    ctx.stroke();
    balls[i].x += balls[i].dx;
    balls[i].y += balls[i].dy;
    if(balls[i].x > window.innerWidth ||   balls[i].x < 0)    balls[i].dx = -  balls[i].dx;
    if(balls[i].y> window.innerHeight ||  balls[i].y < 0)    balls[i].dy = -  balls[i].dy;
    requestAnimationFrame(animate);
  }
}

function loadBalls(num){
  for(var i=0; i<num; i++){
    balls[i] = new Ball(Math.random()*canvas.width,Math.random()*canvas.height,Math.random()*10 - 5,Math.random()*10 - 5);
  }
}
