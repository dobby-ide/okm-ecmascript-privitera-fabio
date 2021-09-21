
function repeat(word, num=1){
  newword = "";
  for(var i=0; i<num; i++){
    newword= newword+word;
  }
  return newword;
}




console.log( repeat("moi") ) // outputs "moi"
console.log( repeat("moi", 4) ) // outputs "moimoimoimoi"
