var user = {
  name: 'Jack',
  sayHello: function sayHello() {
    console.log('Hello, '.concat(this.name, '!'));
  },
};
console.log(user.name);
let myfunc = user.sayHello;
myfunc(); // outputs "hello undefined" because we are calling this.name inside of a function so this.name is not inside the scope of myfunc
