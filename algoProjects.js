//function instructions. Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
  let newStr = ''
  newStr = str.replace(/[\W_]/g, '').split('').reverse().join('').toLowerCase()
  str = str.toLowerCase().replace(/[\W_]/g, '')
  console.log(str)
  console.log(newStr)
  if(str == newStr){
    return true;
  } 
  return false;
}



palindrome("_Hello")