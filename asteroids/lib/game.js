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
  };

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;
  Game.NUM_ASTEROIDS = 50;

  Game.prototype.addAsteroid = function() {
    var randPos = [Math.floor((Math.random() * Game.DIM_X)),
      Math.floor((Math.random() * Game.DIM_Y))];
    var newAsteroid = new Asteroids.Asteroid({pos: randPos});
    this.asteroids.push(newAsteroid);
  };

  Game.prototype.draw = function(ctx) {

  };

})();
