// Modules are a way to provide private and public class encapsulation.
  // privacy is encapsulated via closures.
  // closures are inner-functions encapsulated within an outer function.
    // they have access to outer function's variables. 
// Modules are based upon object literals. 
  // Object Literals are a great way to namespace global variables(encapsulate your code)

var Module = function(){
  // Line 10 is a private variable.
  var counter = 0;  

  // Object Literal on lines 15-26 is being returned inside the function Module.
  // w/o the object literal you cannot call both incrementCounter and resetCounter. 
  // You can only call one (whichever is explicitly returned by Module.)
  return {
    // incrementCounter is a closure. Also a public function. 
      // Private functions would be functions not being returned inside function Module.
    incrementCounter : function(){
      return counter ++;
    },
    // resetCounter is a closure. Also a public function.
    resetCounter : function(){
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    }
  };

}

var instanceModule = new Module;
instanceModule.incrementCounter();
instanceModule.resetCounter();