var readlineSync = require('readline-sync');
var userInput= readlineSync.question("please enter a string: ");

function reversing(var1){
var reverse = "";
for(var i= var1.length-1;i>=0; i--){
  reverse += var1[i];
  
}
console.log(reverse);
return reverse;
}
function checkIfPal(var1){
  var wholetext = var1.replace(/[#_'",:;. ]/g, '');
  
reversed = reversing(wholetext);

if(wholetext.toLowerCase() == reversed.toLowerCase()){
  console.log("it is a palindrome");
}
else{
  console.log("not a palindrome");
}
}
checkIfPal(userInput);
