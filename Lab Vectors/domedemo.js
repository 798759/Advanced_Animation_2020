var canvas;
var ctx;
var radius =30;
var balls =[];
var firstButton;
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
  loadBalls(100);
  animate();
}
function initOne(){
  canvas = document.getElementById("cnv");
  canvas.style.border='solid black 2px';
  camcas.style.backgroundColor='rgba(0,24,35)';
  ctx = canvas.getContext('2d');
  animate();
}



function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(var i=0; i<balls.length; i++){
      balls[i].run();
  }
  requestAnimationFrame(animate);
}

function loadBalls(num){
  for(var i=0; i<num; i++){
    balls[i] = new Ball(Math.random()*canvas.width,Math.random()*canvas.height,Math.random()*10 - 5,Math.random()*10 - 5);
  }
}
function GameArea(){
  this.wrapperDiv = document.getElementById("wrapperDiv");
      this.wrapperDiv.setAttribute("style"," background-color:yellow; border: 5px solid black; width:900px; height:800px;");
      // create tileMenuDiv
      this.tileMenuDiv = document.createElement("div");
      this.wrapperDiv.appendChild(this.tileMenuDiv)
      this.tileMenuDiv.setAttribute("style"," background-color:#033c4a;width:900px;height:100px;float:left;");

}
