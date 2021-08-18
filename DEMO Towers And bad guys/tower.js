class Tower {
  constructor(x,y,level) {
  this.loc = New JSvector(x,y);
  this.level = level;
  this.damage =0;
  this.speed =0;
  }

  upgrade(){
    if(this.level<3){
      this.level+=1;
    }
    if(this.level ===1){
      this.damage = 10;
      this.speed = 10;
    }
    if(this.level ==2){
      this.damage = 20;
      this.speed = 10;
    }
    if(this.level ===3){
      this.damge= 20;
      this.speed = 20;
    }
  }
  run(){
    this.render()
    this.attack();

  }
  upd(){
    if(this.level ===1){
      this.damage = 10;
      this.speed = 10;
    }
    if(this.level ==2){
      this.damage = 20;
      this.speed = 10;
    }
    if(this.level ===3){
      this.damge= 20;
      this.speed = 20;
    }
  }
  render(){

  }
}
