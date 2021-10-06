import fetch from 'node-fetch';
import require from 'readline-sync';

var id = require.questionInt('Please give star war character id');

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

fetchAllTitles(id).then((titles) => console.log(titles));
