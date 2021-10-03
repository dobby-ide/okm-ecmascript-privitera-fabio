const util = require('util');
var readlineSync = require('readline-sync');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

//readFile("text.txt", 'utf-8').then((data) => console.log(data));

var fileName = readlineSync.question("please enter the file name: ");
function parseJson(data){
  
  function func(resolve, reject){
    const obj = JSON.parse(data);
    if("name" in obj){
      resolve(obj.name)
    }
    else{
      reject("error: property name not found!")
    }
  }
   const p = new Promise(func);
   return p;
}

readFile(fileName, 'utf-8')
  .then(parseJson)
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
