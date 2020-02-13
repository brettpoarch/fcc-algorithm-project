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


//function instructions. Return true if the passed string looks like a valid US phone number.
function telephoneCheck(str) {
  if (str.match(/(^1?[- ]?([(]\d{3}[)])|^1?[ -]?\d{3})[ -]?(\d{3})[ -]?(\d{4}$)/)){
  return true;
}
  return false;
}

telephoneCheck("555-555-5555");


//function instructions: Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
function checkCashRegister(price, cash, cid) {
  var change = (100 * cash) - (100 * price), totalChange = 0, arr = {}, i = 0, j = 0, arr2 = [], hCount = 0, tCount = 0, tnCount = 0, fCount = 0, oCount = 0, qCount = 0, dCount = 0, nCount = 0, pCount = 0;

  for(i; i < cid.length; i++){
    totalChange = totalChange + 100 * cid[i][1] 
  } if(change > totalChange){
    arr.status = "INSUFFICIENT_FUNDS"
    arr.change = []
    console.log(arr)
    return arr
  } else if(totalChange == change) {
    arr.status = "CLOSED"
    arr.change = cid
    return arr
  }
  
  while(change > 0){
    switch (change > 0) {
        case change >= 10000 && cid[8][1] * 100 >= 10000:
          hCount += 100
          change = change - 10000;
          cid[8][1] = cid[8][1] - 100;
          break;
        case change >= 2000 && cid[7][1] * 100>= 2000:
          tCount += 20
          change = change - 2000;
          cid[7][1] = cid[7][1] - 20;
          break;
        case change >= 1000 && cid[6][1] * 100 >= 1000:
          tnCount += 10
          change = change - 1000;
          cid[6][1] = cid[6][1] - 10;
          break;
        case change >= 500 && cid[5][1] * 100 >= 500:
          fCount += 5
          change = change - 500;
          cid[5][1] = cid[5][1] - 5;
          break;
        case change >= 100 && cid[4][1] * 100 >= 100:
          oCount += 1
          change = change - 100;
          cid[4][1] = cid[4][1] - 1;
          break;
        case change >= 25 && cid[3][1] * 100 >= 25:
          qCount += .25
          change = change - 25;
          cid[3][1] = cid[3][1] - .25;
          break;
        case change >= 10 && cid[2][1] * 100 >= 10:
          dCount += .10
          change = change - 10;
          cid[2][1] = cid[2][1] - .10;
          break;
        case change >= 5 && cid[1][1] * 100 >= 5:
          nCount += .05
          change = change - 5;
          cid[1][1] = cid[1][1] - .05;
          break;
        case change >= 1 && cid[0][1] * 100 >= 1:
          pCount += .01
          change = change - 1;
          cid[0][1] = cid[0][1] - .01;
          break;
        case change > 0 :
          arr.status = "INSUFFICIENT_FUNDS";
          arr.change = [];
          return arr;
          break;
        default:
          break;
    }
  }
  
  while(change == 0){
    switch(change == 0){
      case hCount > 0:
        arr2.push(["ONE HUNDRED", hCount]);
        hCount = 0;
        break;
      case tCount > 0:
        arr2.push(["TWENTY", tCount]);
        tCount = 0;
        break;
      case tnCount > 0:
        arr2.push(["TEN", tnCount]);
        tnCount = 0;
        break;
      case fCount > 0:
        arr2.push(["FIVE", fCount]);
        fCount = 0;
        break;
      case oCount > 0:
        arr2.push(["ONE", oCount]);
        oCount = 0;
        break;
      case qCount > 0:
        arr2.push(["QUARTER", qCount]);
        qCount = 0;
        break;
      case dCount > 0:
        arr2.push(["DIME", dCount]);
        dCount = 0;
        break;
      case nCount > 0:
        arr2.push(["NICKEL", nCount]);
        nCount = 0;
        break;
      case pCount > 0:
        arr2.push(["PENNY", pCount]);
        pCount = 0;
        break;
      default:
        break;
   }  
  }

  arr.status = "OPEN"
  arr.change = arr2
  return arr
}


checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
