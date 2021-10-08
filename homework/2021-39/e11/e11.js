const axios = require('axios');

async function fetchAllLocations() {
  var response = await axios.get('http://localhost:8080/locations');
  return response.data;
}

async function addLocation(latLon) {
  let res = await axios.post('http://localhost:8080/locations', latLon);

  let data = res.data;
  return data.id;
}
async function fetchLocation(id) {
  let res = await axios.get(`http://localhost:8080/locations/${id}`);
  let data = res.data;
  return data;
}

async function deleteLocation(id) {
  let res = await axios.delete(`http://localhost:8080/locations/${id}`);
  return res.status;
}
const main = async () => {
  try {
    let id = await addLocation({ lat: 60, lon: 60 });
    console.log(id); // outputs id of the added location
    let statusCode = await deleteLocation(2);
    console.log(statusCode); // 204
    let locations = await fetchAllLocations();
    console.log(locations); // outputs all locations
    let location = await fetchLocation(1);
    console.log(location); // outputs location with id of 1
  } catch (err) {
    console.log(err);
  }
};
main();
