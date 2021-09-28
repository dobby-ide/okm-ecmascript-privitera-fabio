function Person(name) {
  this.name = name;
}
//function ends here
Person.prototype.drinkBeer = function () {
  console.log(this.name + ' drinks beer');
};
//declaring a prototype inheritance to Person (adding a function to the prototype)

function Programmer(name, salary) {
  
  Person.call(this, name);
  this.salary = this.salary;
}
Programmer.prototype.codeApps = function () {
  console.log(this.name + ' implements apps');
};
Object.setPrototypeOf(Programmer.prototype, Person.prototype);
let hannah = new Programmer('hannah', 4000);
hannah.codeApps();


let jack = new Person('jack');
jack.drinkBeer(); //this is only called because of prototype inheritance
let tina = new Person('tina');
tina.drinkBeer();
hannah.drinkBeer();
