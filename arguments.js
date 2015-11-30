var sum = function() {
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  args.forEach(function(num) {
    total += num;
  });
  return total;
};

// console.log(sum());

Function.prototype.myBind = function(context) {
  var args = Array.prototype.slice.call(arguments);
  args = args.slice(1);
  var fn = this;
  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    var allArgs = args.concat(args2);
    fn.apply(context, allArgs);
  };
};

function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound) {
  console.log(this.name + " says " + sound + "!");
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

markov.says("meow");
// Markov says meow!

markov.says.myBind(breakfast, "meow")();
// Breakfast says meow!

markov.says.myBind(breakfast)("meow");
// Breakfast says meow!

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow");
// Breakfast says meow!
