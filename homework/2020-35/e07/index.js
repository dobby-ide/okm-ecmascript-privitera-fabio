var readlineSync = require('readline-sync');
let name = readlineSync.question("please enter your name");

let surname = readlineSync.question('please enter your surname');
let address = readlineSync.question('please enter your address');

let city = readlineSync.question('please enter your city');
function createAddr(){
  var fullAdd = 
  `sending a greeting to 
  ${name} ${surname} that lives in 
  ${address}, ${city}`;
  console.log(fullAdd);
}
createAddr();