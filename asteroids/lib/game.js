/* global Asteroids */

(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  var Game = Asteroids.Game = function(){
    this.asteroids = [];
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.addAsteroid();
    }
    this.ship = new Asteroids.Ship({game: this});
  };

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;
  Game.NUM_ASTEROIDS = 5;

  Game.prototype.addAsteroid = function() {
    var randPos = [Math.floor((Math.random() * Game.DIM_X)),
      Math.floor((Math.random() * Game.DIM_Y))];
    var newAsteroid = new Asteroids.Asteroid({pos: randPos, game: this});
    this.asteroids.push(newAsteroid);
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    var allObjects = this.allObjects();
    console.log("ob=-------", allObjects);
    allObjects.forEach(function(object) {
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    var x = pos[0] % Game.DIM_X;
    var y = pos[1] % Game.DIM_Y;

    if(x < 0 ){
      x = Game.DIM_X;
    }
    if(y < 0 ){
      y = Game.DIM_Y;
    }
    return [x, y];
  };

  Game.prototype.checkCollisions = function(){
    var game = this;
    this.asteroids.forEach(function(asteroid1, idx1){
      for (var idx2 = idx1+1; idx2 < game.asteroids.length; idx2++) {
        var asteroid2 = game.asteroids[idx2];
        if( asteroid1.isCollidedWith(asteroid2) ){
          // alert("Asteroid collision");
          asteroid1.collideWith(asteroid2);
        }
      }
    });
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(asteroid) {
    var index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
  };

  Game.prototype.allObjects = function() {
    this.asteroids.push(this.ship);
    return this.asteroids;
  };

})();
