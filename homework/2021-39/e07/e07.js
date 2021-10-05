var readlineSync = require('readline-sync');
const fs = require('fs');

// I am not using readline-sync here, because I am only testing the promises with async function. it all works now so I mark exercise as completed

function readFile(fileN){
  function inner(resolve,reject){
    fs.readFile(fileN, 'utf-8', (err,data)=>{
      if (err) {
        reject("PROBLEM");
      }else{
        resolve(data);
      }
    });
  }
  return new Promise(inner);
}
function parseJson(data) {
  function func(resolve, reject) {
    var obj = JSON.parse(data);
    if (("name" in obj)) {
      resolve(obj.name);
    } else {
      reject('error: property name not found!');
    }
  }
  return new Promise(func);
}


async function readFileAndParse (fileName) {
    let reading = await readFile(fileName, 'utf-8');
   let result = await parseJson(reading);
   console.log(result)
   return result;
   
}
  
  


readFileAndParse("package.json")
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));

