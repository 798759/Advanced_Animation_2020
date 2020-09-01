window.onload = function() {
  styleCanv();
  addElement();

};

function styleCanv(){

     ctx.strokeStyle = 'rgba(155,100,20)';
    ctx.fillStyle = 'rgba(155,100,20)';
    ctx.beginPath();
    ctx.arc(x,y, radius, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();

};

function addElement () {
 };
