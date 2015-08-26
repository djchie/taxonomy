var HoneyMakerBee = function() {
  // Constructs a Bee to inherit properties
  Bee.call(this);
  // Adding on properties to HoneyMakerBee
  this.age = 10;
  this.job = "make honey";
  this.honeyPot = 0;
};

// Inherit Bee's prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
// Override the constructor with value "Bee" to have "HoneyMakerBee"
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// Adding on the makeHoney method to HoneyMakerBee's prototype
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

// Adding on the giveHoney method to HoneyMakerBee's prototype
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};