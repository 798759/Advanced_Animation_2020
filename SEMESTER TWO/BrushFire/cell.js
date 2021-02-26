class Cell {
    constructor(game, r, c, state) {
        let ctx = game.ctx;
        this.game = game;
        this.width = game.cellWidth;
        this.height = game.cellHeight;
        let x = c * this.width;
        let y = r * this.height;
        this.loc = new JSVector(x, y);
        this.r = r;
        this.c = c;
        this.state =state;
        this.dist = 1000000;
        this.parent = null;
        this.clr;
        if(r==game.numRows-1 && c==game.numCols-1){
          this.clr = "green"
        }
        else if(this.state == true){
          this.clr = "brown"
        }
        else if(!this.parent){
          this.clr = "blurywood"
        }
       this.neighbors = new Array();
       this.center = new JSVector(this.loc.x+this.game.cellWidth/2, this.loc.y+this.game.cellHeight/2);
    }//  +++++++++  end constructor

    run() {
        this.render();
    }

    render() {
        let ctx = game.ctx;
        ctx.fillRect(this.loc.x, this.loc.y,this.width, this.height);
        ctx.strokeStyle = "black";
        this.fillStyle=this.clr;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.rect(this.loc.x, this.loc.y, this.width, this.height);
        // ctx.fill();
        ctx.stroke();
        // ctx.font = '10px serif';
        // ctx.strokeText("r = " + this.r, this.loc.x + 5, this.loc.y + 11);
        // ctx.strokeText("c = " + this.c, this.loc.x + 5, this.loc.y + 31);
    }
    loadNeighbors(){
  if(this.game.arrLoaded && this.neighbors.length==0){
    if(this.r>0){//north
      this.neighbors.push(this.game.grid[this.r-1][this.c]);
    }
    if(this.c>0){//west
      this.neighbors.push(this.game.grid[this.r][this.c-1]);
    }
    if(this.r<this.game.numRows-1){//south
      this.neighbors.push(this.game.grid[this.r+1][this.c]);
    }
    if(this.c<this.game.numCols-1){//east
      this.neighbors.push(this.game.grid[this.r][this.c+1]);
    }
  }
}
}//+++++++++++++++++++++  end of Cell class
