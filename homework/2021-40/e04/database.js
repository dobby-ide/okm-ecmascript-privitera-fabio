const fs = require('fs');
module.exports = {
  save: function save(value) {
    var mypromise = (resolve, reject) => {
      if (resolve) {
        fs.appendFile('database.txt', value, function (err) {
          if (err) throw err;
        });
      }
    };
    return new Promise(mypromise);
  },

  getAll: function getAll() {
    var mypromise = (resolve, reject) => {
      if (resolve) {
        fs.readFile('./database.txt', 'utf-8', (err, data) => {
          if (err) {
            throw err;
          }
          if (data) {
            console.log(data); // I dont understand how this is called
          }
        });
      }
    };
    return new Promise(mypromise);
  },
};
// fs.appendFile('message.txt', 'data to append', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
