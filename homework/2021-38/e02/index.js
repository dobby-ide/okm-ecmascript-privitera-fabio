function doIt(bool){
  if (bool == false){
  return function(){
    console.log("hello");
  }}
  if(bool == true){
    return function(){
      console.log("world");
    }
  }

}

doIt(false)(); // outputs hello
doIt(true)(); // outputs world
