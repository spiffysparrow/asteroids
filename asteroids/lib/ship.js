/* global Asteroids */

(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var COLOR = "blue";
  var RADIUS = 20;

  var Ship = Asteroids.Ship = function(hash) {
    hash.color = COLOR;
    hash.radius = RADIUS;
    hash.vel = [0, 0];
    hash.pos = [Asteroids.Game.DIM_X / 2 , Asteroids.Game.DIM_Y / 2];
    Asteroids.MovingObject.call(this, hash);
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
})();
