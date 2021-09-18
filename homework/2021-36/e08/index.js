function doIt() {
  console.log('hello');
}
/*  doIt.call(); can call that function. 
Because doIt is the name of a function and a function is an instance of the Function type.
what does exactly mean that is an instance?
instanceof operator returns true if the doIt function (which is an object in javascript)
can inherit from the protype of Function. In this case, it can.
*/

console.log(typeof doIt);
console.log(doIt instanceof Function);

/*
I rearranged the code so that is shows how Function() can work, as an explicative example.
new Function creates a new function 
in this example the call() method do as if it is in the following code

var myFunc(a){
  
console.log(a);
}

*/
var myFunc = new Function('a="hello"', 'console.log(a)');
myFunc.call();


//myFunc();

