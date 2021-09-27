//closure and anonymous inner function

// function Clock() {
//   var somevariable = this;
//   this.time = new Date().toString();
//   this.startInterval = function () {
    
// setInterval(function () {
//   somevariable.tick();
// }, 1000);
//   };
//   this.tick = function () {
//     this.time = new Date().toString();
//     console.log(this.render());
//   };
//   this.render = function () {      //not a function error
//     return this.time;
//   };
// }




//arrow syntax
// function Clock() {
//   this.time = new Date().toString();
//   this.startInterval = function () {
//     setInterval(this.tick, 1000); //here setInterval calls this.tick every second;
//   };
//   this.tick =()=> {
//     this.time = new Date().toString();
//     console.log(this.render());
//   };
//   this.render = function () {
//     return this.time;
//   };
// }
 
//function binding
function Clock() {
  
  this.time = new Date().toString();
  this.startInterval = function () {
    setInterval(this.tick, 1000);
  };
  this.tick = function () {
    
    this.time = new Date().toString();
    
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
  this.tick = this.tick.bind(this);
}

let clock = new Clock()
 console.log(clock.render()) // outputs time
 clock.startInterval()       // outputs time for every second, uses render
