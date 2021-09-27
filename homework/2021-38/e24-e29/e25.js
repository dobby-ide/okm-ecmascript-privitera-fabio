// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   drinkBeer() {
//     console.log(this.name + ' drinks beer');
//   } //only once in memory (it is in the prototype)
//   sayHello() {
//     console.log('hello from ' + this.name);
//   }
// }

class Person {
  constructor(name) {
    this.name = name;
    this.drinkBeer = function () {//this would be not on the prototype so it will be several times in memory depending on how many objects of person
      console.log(this.name + ' drinks beer');
    };
  }
  sayHello() {//this is in the prototype
    console.log('hello from ' + this.name);
  }
}
let jack = new Person('jack');
jack.sayHello();
let tina = new Person('tina');
tina.sayHello();
Person.prototype.sayHello(); 
//Person.prototype.drinkBeer();