let user = {
  firstName: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.firstName}!`);
  },
};


var copied = user.sayHello.bind(user);
let myFunction = user.sayHello;
myFunction();
copied();
