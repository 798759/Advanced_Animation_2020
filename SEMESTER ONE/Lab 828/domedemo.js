var r = 1
var g =1
var b=1
var dx = 0
var dy=0
var canvas
var ctx



window.onload = function() {
  styleCanv();
  //addElement();
  animation();

}


function styleCanv(){
 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");
};

function addElement () {
  redbox(66,135,245);
 };

function redbox(r,g,b,dx,dy){
  var col = "rgb(" + r + "," + g + "," + b + ")"
  console.log(col);
  ctx.fillStyle = col;
  ctx.fillRect(dx, dy, 150, 75);
}

function animation(){
  console.log("hi its me")
  if(r>255){
  r =0;
}else{
  r = r+1;
}


  dx=dx+.1;
  dy=dy+.1;
  redbox(r,b,g,dx,dy);
  console.log(r);
  requestAnimationFrame(animation);

}
