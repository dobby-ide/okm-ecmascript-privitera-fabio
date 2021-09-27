function Person(name) {
  this.name = name;
  
}

Person.prototype.sayHello = function () {
  console.log('hello from ' + this.name);
};
Person.prototype.drinkBeer = function () {
  console.log(this.name + ' drinks beer');
};
let jack = new Person('jack');
jack.sayHello();
let tina = new Person('tina');
tina.sayHello();
tina.drinkBeer();
jack.drinkBeer();