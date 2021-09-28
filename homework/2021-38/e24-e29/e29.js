String.prototype.isPalindrome = function(){
  var newword = "";
  for(var i = 0;i<this.length; i++){
      let j = this[i];
      newword += j;
  }
  var reverse = newword.split("").reverse().join("");
  

  if (reverse == newword){
    return true;
  }
  
  else{
  return false;
  }
}



console.log('saippuakauppias'.isPalindrome()); // true
console.log('abc'.isPalindrome()); // false
