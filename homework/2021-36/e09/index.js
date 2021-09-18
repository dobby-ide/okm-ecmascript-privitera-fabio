function doIt(a,b,c){
  var result = "";
  let args = [...arguments];
  for(keys in args){
    result = result + args[keys];
    
  }console.log(result);
}



doIt('a'); // outputs a
doIt('a', 'b'); // outputs ab
doIt('a', 'b', 'c'); // outputs abc
