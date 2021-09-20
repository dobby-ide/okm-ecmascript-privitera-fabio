const { readFile } = require('fs');
const process = require('process');
var arguments = process.argv.slice(2);
const fs = require('fs');
//reading
let content= "";
const reading = fs.readFile(arguments[0],'utf8', (err, data) =>{
  if(err){
    console.log("error");
    return
  }
  console.log(data);
  content = data;
  fs.writeFile(arguments[1], content, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log("writing done")
  
})

})

//writing
fs.writeFile('copy.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log("writing done")
  
})