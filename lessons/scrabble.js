// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
export default function scrabble(simbols, words) {
 const lowSimbols = simbols.toLowerCase();
 const values = Object.values(lowSimbols);
  
  
  
 const object1 = {};
 for (const value of values) {
   const check1 = Object.hasOwn(object1, value);
  
   if (check1 ) {
     object1[value] += 1;
   } else {
     object1[value] = 1;
   }
 };
  for (const key of words) {
    const check2 = Object.hasOwn(object1, key);
    if (check2) {
      object1[key] -= 1;
    } else {
      object1[key] = 1;
    }
    
   
  }
  const values1 = Object.values(object1);
  for (const val1 of values1) {
    console.log(val1)
    if (val1 === 0) {
      return false;
    } else {
      return true
    }
   
  }

}
// END
// Вхождение буквы из слова в строку символов проверить 
// console.log('Индекс первого вхождения «й» с начала строки равен ' + anyString.indexOf('й'));
// Отобразит 5