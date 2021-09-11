//e03
var readlineSync = require('readline-sync');
var name = readlineSync.question("Please enter your name:");
console.log(name);
//e04
var newname="";
var x_num = readlineSync.question("please enter a number:");
for(var i=0;i<x_num;i++){
newname = name+newname;

}
console.log(newname);

//e05
var j = "Hello";
var n=(Number(j));
console.log(n); //returns NaN (not a number)
var d = String(n);
var output = "";
for(var t=0; t<16; t++){
output=output+d
}
console.log(output+"batman");

