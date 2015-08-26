var RetiredForagerBee = function() {
  // Constructs a ForagerBee to inherit properties
  ForagerBee.call(this);
  // Adding on properties to RetiredForagerBee
  this.age = 40;
  this.job = "gamble";
  this.canFly = false;
  this.color = "grey";
};

// Inherit ForagerBee's prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
// Override the constructor with value "ForagerBee" to have "RetiredForagerBee"
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// Adding on the forage method to HoneyMakerBee's prototype
RetiredForagerBee.prototype.forage = function() {
  return "I am too old, let me play cards instead";
}

// Adding on the gamble method to HoneyMakerBee's prototype
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}