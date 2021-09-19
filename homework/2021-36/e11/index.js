const axios = require('axios');
const process = require('process');
var arguments = process.argv.slice(2);



//https://swapi.dev/api/people/1

var names = axios.get('https://swapi.dev/api/people/').then((resp) => {
  
  var result = resp.data.results[arguments[0] - 1];
 
    console.log(result.name);
  
  return resp.data;
});
