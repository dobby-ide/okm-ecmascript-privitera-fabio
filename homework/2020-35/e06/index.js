let letGlobal = 1;
var varGlobal = 2;
const constGlobal = 3;
{
  let letLocal=1;
  var varLocal=2;
  const constLocal=3;
};
function varCheck() {
  //let global
  console.log("checking if a variable declared outside a scope block works within a function [let case]");
  if (typeof letGlobal != 'undefined') {
    console.log('yes it works');
  } else {
    console.log('no, it does not work');
  }
  //var global
  console.log(
    'checking if a variable declared outside a scope block works within a function [var case]'
  );
  if (typeof varGlobal != 'undefined') {
    console.log('yes it works');
  } else {
    console.log('no, it does not work');
  };
  //const global
  console.log(
    'checking if a variable declared outside a scope block works within a function [const case]'
  );
  if (typeof constGlobal != 'undefined') {
    console.log('yes it works');
  } else {
    console.log('no, it does not work');
  }
  //var local
  console.log(
    'checking if a variable declared INSIDE a scope block works within a function [var case]'
  );
  if (typeof varLocal != 'undefined') {
    console.log('yes it works');
  } else {
    console.log('no, it does not work');
  }
  //let local
  console.log(
    'checking if a variable declared INSIDE a scope block works within a function [let case]'
  );
  if (typeof (letLocal) != 'undefined') {
    console.log('yes it works');
  } else {
    console.log('no, it does not work');
  }
  console.log(
    'checking if a variable declared INSIDE a scope block works within a function [const case]'
  );
  if (typeof constLocal != 'undefined') {
    console.log('yes it works');
  } else {
    console.log('no, it does not work');
  }
}
varCheck();



