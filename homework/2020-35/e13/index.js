var readlineSync = require('readline-sync');
var num = readlineSync.question("please enter a negative or positive number: ");
if(num >= 0){
  console.log(num);
}else{
  var newnumber= num * (-1);
  console.log(newnumber);
}
