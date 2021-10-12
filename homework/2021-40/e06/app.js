const {
  parsingAndSorting,
  listNamesAndAmounts,
} = require('./modules/functions.js');

var fs = require('fs');
var readlineSync = require('readline-sync');
var choices = [
  'List names and amounts',
  'List names',
  'Total amount',
  'Amount of given name',
];

async function switching(statusquo = 1) {
  while (statusquo != -1) {
    var statusquo = readlineSync.keyInSelect(choices, 'please choose one: ');
    switch (statusquo) {
      case 0:
        var pp = await parsingAndSorting();
        for (var i = 0; i < pp.length; i++) {
          console.log(pp[i].name + ' ' + pp[i].amount);
        }

        break;
      case 1:
        var pp = await parsingAndSorting();
        for (var i = 0; i < pp.length; i++) {
          console.log(pp[i].name);
        }
        break;
      case 2:
        var n = 0;
        var pp = await parsingAndSorting();
        for (var i = 0; i < pp.length; i++) {
          var n = n + pp[i].amount;
        }
        console.log(n);
        break;
      case 3:
        var input = readlineSync.question('please enter a name: ');
        var pp = await parsingAndSorting();
        for (var i = 0; i < pp.length; i++) {
          if (input === pp[i].name) {
            console.log(pp[i].amount);
          }
        }
    }
  }
}

switching();
