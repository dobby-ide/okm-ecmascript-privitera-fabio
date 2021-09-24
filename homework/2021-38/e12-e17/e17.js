function helper() {
  user.sayHello();
}
let user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    setTimeout(helper, 1000);
  },
};
user.sayHello();
user.sayDelayedHello();
//my guess here is that because helper uses user.sayHello where the this.name is bound!