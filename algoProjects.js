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

//function instructoins. Convert the given number into a roman numeral.
function convertToRoman(num) {
 let str = ''
 while(num > 0){
     switch (num > 0) {
        case num >= 1000:
          num = num - 1000;
          str +=  'M';
          break;
        case num >= 900:
          num = num - 900;
          str += 'CM';
          break;
        case num >= 500:
          num = num - 500;
          str += 'D';
          break;
        case num >= 400:
          num = num - 400;
          str += 'CD';
          break;
        case num >= 100:
          num = num - 100;
          str += 'C';
          break;
        case num >= 90:
          num = num - 90;
          str += 'XC';
          break;
        case num >= 50:
          num = num - 50;
          str += 'L';
          break;
        case num >= 40:
          num = num - 40;
          str += 'XL';
          break;
        case num >= 10:
          num = num - 10;
          str += 'X';
          break;
        case num >= 9:
          num = num - 9;
          str += 'IX';
          break;
        case num >= 5:
          num = num - 5;
          str += 'V';
          break;
        case num >= 4:
          num = num - 4;
          str += 'IV';
          break;
        case num >= 1:
          num = num - 1;
          str += 'I';
          break;
  }
 }
return str
}

convertToRoman(1023);


/*function instructions. One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/
function rot13(str) {

  let num = 0, newStr = ''

  for(let i = 0; i < str.length; i++){
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      if(str.charCodeAt(i) + 13 > 90){
        num = (str.charCodeAt(i) + 13) - 90;
        num = num + 64;
        newStr += String.fromCharCode(num)
    } else if(str.charCodeAt(i) + 13 <= 90) {
        newStr += String.fromCharCode(str.charCodeAt(i) + 13);
    }
   } else {
     newStr += String.fromCharCode(str.charCodeAt(i))  
   } 
  }
  return newStr;
}


rot13("SERR CVMMN!");
