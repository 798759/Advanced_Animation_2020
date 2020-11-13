function Game() {
  this.gamePaused = false; // the game may be paused or not
  this.ga = new GameArea(); // create all the dom elements
  // get the canvas as a property of the game
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
  this.canvas = document.getElementById('canvas');
  // get the context
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  this.ctx = this.canvas.getContext('2d'); // This is the context

  //   create the array of bubble objects


    var x, y, dx, dy
    x = Math.random() * this.canvas.width;
    y = Math.random() * this.canvas.height;
    dx =7
    dy = 7
    this.snake = new Snake(15,x,y,dx,dy);


  //  Add event handlers to all tile objects
  for (let i = 0; i < this.ga.tiles.length; i++) {
    this.ga.tiles[i].addEventListener('mouseover', // mouseover is the name of an event
      function() { //  JavaScript has anonymous functions
        //  'this' is the listener target object: tile
        //  'this' does not refer to the game object
        this.style.backgroundColor = "#ac8fe3"
      },
      false);
    this.ga.tiles[i].addEventListener('mouseout', function() {
      this.style.backgroundColor = "#d5dee0"
    }, false);
    this.ga.tiles[i].addEventListener('click', function() {
      game.gamePaused = !game.gamePaused;
      console.log("Mouse Clicked");
    }, false);
  }
  this.canvas.addEventListener("mousemove", function(event) {
    mouseLoc = new JSVector(event.pageX, event.pageY);
  });
  this.canvas.addEventListener("click", function() {
    if (attraction == true) {
      attraction = false;
    } else {
      attraction = true;
    }
  })
} //++++++++++++++++++++++  end Bubbles constructor

// function to run the game each animation cycle
Game.prototype.run = function() {
  if (!this.gamePaused) {
    this.snake.run();
    }
  }
