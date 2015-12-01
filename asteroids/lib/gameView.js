/* global Asteroids */

(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function() {
    this.game = new Asteroids.Game();
    var canvasEl = document.getElementsByTagName("canvas")[0];
    canvasEl.height = window.innerHeight;
    canvasEl.width = window.innerWidth;

    this.ctx = canvasEl.getContext("2d");
  };

  GameView.prototype.start = function() {
    var game = this.game;
    var ctx = this.ctx;

    setInterval(function(){
      game.step();
      game.draw(ctx);
    }, 20);
  };
})();
