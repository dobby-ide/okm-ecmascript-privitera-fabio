const readline = require('readline-sync');

const { save, getAll } = require('./database.js');

async function main() {
  const choices = ['Save', 'Display'];
  let index = readline.keyInSelect(choices, 'Your Choice?');
  switch (choices[index]) {
    case 'Save':
      const saving = await save('jack');

      break;
    case 'Display':
      const displaying = await getAll();
      break;
  }
}
main();
