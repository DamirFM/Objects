// https://ru.hexlet.io/challenges/js_objects_to_rna_exercise/instance

//Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).

//Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

//G -> C
//C -> G
//T -> A
//A -> U

//Реализуйте и экспортируйте функцию по умолчанию, 
//которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

//Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), 
//то функция должна вернуть пустую строку. 
//Если в переданной цепи ДНК встретится "незнакомый" нуклеотид 
//(не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export default function dnaToRna (data) {
    const result = [];
  
    const entries = Object.values(data);
  
    for (const value of entries) {
      let current = [value];
      
     if (current == 'G') {
       current = 'C';
     }
     else if (current == 'C') {
        current = 'G';
      }
     else if (current == 'T') {
        current = 'A';
      }
     else if (current == 'A') {
        current = 'U';
      }
     else if (current !== 'A' && current !== 'C' && current !== 'G' && current !== 'U') {
       return null;
     }
      if (!value) return null;
  
      result.push(current);
    }
  
    return result.join('');
  }
  // END