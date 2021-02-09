class Player {
  constructor(xpos, ypos) {
    this.loc = new JSVector(xpos, ypos);
    this.clr = "rgba(252, 186, 3)"

  }
  run() {
    this.render();
  }
  render() {
    let ctx = ecoSystem.context1;
    ctx.save();
    ctx.strokeStyle = this.clr;
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.translate(this.loc.x, this.loc.y);
    ctx.arc(0, 0, 15, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

  }
}
