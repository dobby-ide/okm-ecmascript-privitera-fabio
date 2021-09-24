// let user = {
//   name: 'Jack',
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   sayDelayedHello: function () {
//     let variable = 10;
//     setTimeout(function () {
//       console.log(variable);
//     }, 1000);
//   },
// };
// user.sayDelayedHello();


// let user = {
//   name: 'Jack',
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   sayDelayedHello: function () {
//     console.log(this);
//     setTimeout(function () {
//       console.log(this)
//     }, 1000);
//   },
// };
// user.sayDelayedHello();



let user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    let thisWorks = this;
    console.log(this);
    setTimeout(function () {
      // THIS DOES NOT WORK (this does not refer to user)
      thisWorks.sayHello();//because this is not destroyed and now it can be referenced, it outputs Hello Jack calling sayHello
    }, 1000);
  },
};
user.sayDelayedHello();
