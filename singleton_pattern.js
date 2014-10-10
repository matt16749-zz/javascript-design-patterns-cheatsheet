// Singleton pattern restricts instantiation of a class to a single object.
// Singletons serve as a way to namespace global variables.

// Simplest form of Singleton is an object literal.
var Singleton = {
  key1 : console.log("This is a value"),
  key2 : console.log("Can assign $(jquery selectors) to take them out of global space here.")
}

Singleton.key1;
Singleton.key2;