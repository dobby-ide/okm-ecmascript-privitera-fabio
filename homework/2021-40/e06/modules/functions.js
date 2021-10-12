var fs = require('fs');

function listNamesAndAmounts() {
  //reading the json
  function reading(resolve, reject) {
    fs.readFile('names.json', 'utf-8', (err, data) => {
      if (err) {
        reject('problem');
      } else {
        resolve(data);
      }
    });
  }
  const p = new Promise(reading);
  return p;
}
async function parsingAndSorting() {
  var p = await listNamesAndAmounts();
  var parsed = JSON.parse(p);
  var values = parsed.names;
  mapping = [];
  mapping = values.sort((a, b) => {
    return b.amount - a.amount;
  });

  return mapping;
}

module.exports = { parsingAndSorting, listNamesAndAmounts };
