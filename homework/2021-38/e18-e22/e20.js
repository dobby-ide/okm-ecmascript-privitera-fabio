
let user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    setTimeout(() =>{this.sayHello()}, 1000);
    //setTimeout(function () {
      //this.sayHello(); //it fails because this does not have anything to do with user
    
  },
};
user.sayDelayedHello();

//----------------------

'use strict';

var user = {
  name: 'Jack',
  sayHello: function sayHello() {
    console.log('Hello, '.concat(this.name, '!'));
  },
  sayDelayedHello: function sayDelayedHello() {
    var _this = this; // in this line we have a new reference to this (_this)that brings the concept of Closure. 
    //so the variable this is now alive inside the scope again so _this.sayHello() will refer to user as well as _this

    setTimeout(function () {
      _this.sayHello();
    }, 1000); 
  },
};
user.sayDelayedHello();
