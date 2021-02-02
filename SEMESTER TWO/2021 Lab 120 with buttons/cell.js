class Cell {
    constructor(row,col,state,id) {
      this.id =id;
      this.col = col;
      this.row = row;
      this.ctx1 = id.context1;
      this.width = id.cellWidth;
      this.height = id.cellHeight;
      this.xCoor = col*this.width+this.id.world.left;
      this.yCoor = row*this.height+this.id.world.top;
      this.loc = new JSVector(this.xCoor, this.yCoor);
      this.clr = "rgba(50, 150, 120, 0.2)"
      this.neighbors = [];
      this.neighbors.length=8;
      this.state =state;
    }//  +++++++++  end constructor

    run() {
        this.render();
        this.loadNeighbors(this.neighbors);
    }

    render() {
      if(this.state == true){
        this.clr = "blue"
      }
      else{
        this.clr="rgba(0,0,0,1)"
      }
      let ctx1 = this.ctx1;
     ctx1.save();
     ctx1.strokeStyle = "rgba(0,0,0,1)";
     ctx1.fillStyle = this.clr;
     ctx1.beginPath();
     ctx1.rect(this.loc.x, this.loc.y, this.width, this.height);
     ctx1.fill();
     ctx1.font = "20px serif";
     ctx1.strokeText("c = "+ this.col, this.loc.x+5, this.loc.y+20);
     ctx1.strokeText("r = "+ this.row, this.loc.x+5, this.loc.y+50);
     ctx1.stroke();
     ctx1.restore();
    }
    loadNeighbors(n){
        for(let r=0; r<this.id.numRows; r++){
          for(let c=0; c<this.id.numCols; c++){
            let cell = this.id.cells[r][c];
            if(cell.state == false){
              if(r-1>=0){
                if(c == this.col && r == this.row-1){//north
                    n[0] = cell;
                }
                else if(r == this.row-1 && c == this.col+1){//ne
                    n[1] = cell;
                }
                else if(r == this.row-1 && c == this.col-1){//nw
                    n[7] = cell;
                }
              }
              if(r+1<this.id.numRows){
                if(c == this.col && r == this.row+1){//south
                    n[4] = cell;
                }
                else if(r == this.row+1 && c == this.col+1){//se
                    n[3] = cell;
                }
                else if(r == this.row+1 && c == this.col-1){//sw
                    n[5] = cell;
                }
              }
              if(c-1>=0){
                if(r == this.row && c == this.col-1){//west
                    n[6] = cell;
                }
              }
              if(c+1<this.id.numCols){
                if(r == this.row && c == this.col+1){//east
                    n[2] = cell;
                }
              }
            }
          }
        }
      }


    update() {

    }
}//+++++++++++++++++++++  end of Cell class
