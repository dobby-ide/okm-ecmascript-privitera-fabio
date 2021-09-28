let obj = { name: 'jussi' };

function Dog(name) {
  this.name = name;
  this.sniffButt = this.sniffButt.bind(obj);//here we are binding the this of the sniffButt in the protoype, to the object created obj
  //this.sniffButt = function(){   //now works on the fact, imo, that we are calling this.sniffButt from delayedSniffButt(would that be the same if delayedSniffButt would be declared as a local function in Dog?????)
  //console.log("hello world");
  //}
  // this.sniffButt = this.sniffButt.bind(this) //now it works because we are telling this.sniffButt must stick to the this that points to Dog
}
Dog.prototype.sniffButt = function () {
  console.log(this.name + ' sniffs butt'); //once in memory
};

Dog.prototype.delayedSniffButt = function () {
  setTimeout(this.sniffButt, 1000); //this.sniffButt is undefined (and yet I dont know why we use it!!!!)
};

let spot = new Dog('spot');
let vilma = new Dog('vilma');

spot.delayedSniffButt();
vilma.delayedSniffButt();
