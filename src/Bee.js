var Bee = function() {
  // Constructs a Grub to inherit properties
  Grub.call(this);
  // Adding on properties to Bee
  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing";
};

// Inherit Grub's prototype
Bee.prototype = Object.create(Grub.prototype);
// Override the constructor with value "Grub" to have "Bee"
Bee.prototype.constructor = Bee;