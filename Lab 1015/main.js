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

}
