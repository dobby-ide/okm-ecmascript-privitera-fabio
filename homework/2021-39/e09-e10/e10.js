import fetch from 'node-fetch';
import require from 'readline-sync';



async function fetchAllTitles(id) {
  const hr = await fetch(`https://swapi.dev/api/people/${id}`);
  const obj = await hr.json();

  const filmsURLs = obj.films;

  let responses = await filmsURLs.map((a) => fetch(a));
  var responsePromise = await Promise.all(responses);
  let parsed = responsePromise.map((a) => a.json());

  var jsonPromises = await Promise.all(parsed); //array of promises.
  let titles = await jsonPromises.map((a) => a.title);

  let final = { name: obj.name, films: titles };
  return final;
}
var dataInput = process.argv.slice(2);


async function fetchAll(args){
 var numbers = dataInput.map(a=>a);

 

 console.log(numbers)
 
    var fetching = await numbers.map(a=>fetchAllTitles(a));
    var finale = Promise.all(fetching);
    return finale;
  
 
}

fetchAll(dataInput).then((data) => console.log(data));
