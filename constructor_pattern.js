// Constructors are normal way to implement instances.
// Used with prototypes and normal functions.

// Attributes of the Object belong when constructor is first created.
// Attributes will vary with each instance, therefore they are created with each instance.
var Car = function(model, year, miles){
  this.model = model;
  this.year = year;
  this.miles = miles;
}

// Prototypes should contain functions of Constructor Object.
// Prototypes are part of Object blueprint, not created with each instance.
Car.prototype.toString = function(){
  return console.log(this.model + " has done " +  this.miles + " miles");
}

// New instance of Car
var civic = new Car("Honda", 2009, 70000);
// Calling the function toString
civic.toString();