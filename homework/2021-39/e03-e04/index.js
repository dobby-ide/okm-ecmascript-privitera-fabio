var readlineSync = require('readline-sync');
const fs = require('fs');

var userInput = readlineSync.question("please provide a file name: ");
var f = fs.readFile(userInput, 'utf-8', (err,data)=>{
  if(err){
    console.error(userInput + " file does not exist")
    return
  }else{
 
try {
  const obj = JSON.parse(data);
  if(("name" in obj)){
  console.log(obj.name);
}else{
  console.log(`file ${userInput} does not contain that key`);
}
  } catch (err) {
  console.log(`file ${userInput} does not contain json`);
} 
  
  
}});
