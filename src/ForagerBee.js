var ForagerBee = function() {
  // Constructs a Bee to inherit properties
  Bee.call(this);
  // Adding on properties to ForagerBee
  this.age = 10;
  this.job = "find pollen";
  this.canFly = true;
  this.treasureChest = [];
};

// Inherit Bee's prototype
ForagerBee.prototype = Object.create(Bee.prototype);
// Override the constructor with value "Bee" to have "ForagerBee"
ForagerBee.prototype.constructor = ForagerBee;

// Adding on the forage method to HoneyMakerBee's prototype
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}