const axios = require('axios');
const process = require('process');
var arguments = process.argv.slice(2);




//https://swapi.dev/api/people/1

var names = axios.get('https://swapi.dev/api/people/').then((resp) => {
  if(arguments[0] == null){

var bmi = new Map();

for(var i = 0; i<resp.data.results.length; i++){
  
  //iterating through the names at i index(to all the items of results)
//console.log(resp.data.results[i].name);
var newArray = resp.data.results.map(function(singleElement){
    return singleElement.name;
})
//creating an array of objects that takes the name from newArray and compare it with results:
//for each name there at the same index position we will go through 
//the person height and mass and store the bmi inside the array
for(var i = 0; i<resp.data.results.length; i++){
if(newArray[i] == resp.data.results[i].name){
  var height = resp.data.results[i].height;
  var mass = resp.data.results[i].mass;
  var bmiResult = mass/Math.sqrt(height);
  bmi.set(newArray[i], bmiResult, );
  
}

  
}
var final = new Map([...bmi.entries()].sort());
var keys = Array.from( final.keys() );
console.log(keys)
}
var output = `<ul> 
${keys.map(names => `<li>${names}</li>`).join('\n') }
</ul>`;
console.log(output);


  }else{
  
  var result = resp.data.results[arguments[0] - 1];
 
    console.log(result.name);
  }
  
  return resp.data;
});
