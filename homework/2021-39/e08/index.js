
import readlineSync from 'readline-sync';
import fetch from 'node-fetch';

var id = readlineSync.question("give id: ");

//easy way to get data working for your own use.
async function fetchTitle(num){
  //response obtain the informations from the url and they are parsed so that can be used as JSON file (with KEY/VALUE pairs)
  const response = await fetch(`https://swapi.dev/api/people/${num}`);
  const data = await response.json(response);
  let n = data.films[0]; //films[0] contains the first movie infos as a URL
  const resp = await fetch(n); //url is passed to fetch etc.
  const parsed = await resp.json(resp);
  let film = parsed.title;

  return film;
}
fetchTitle(id).then((movie)=>console.log(movie));