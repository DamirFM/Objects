//https://ru.hexlet.io/challenges/js_objects_operations_exercise/instance

//Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает 
//два объекта и возвращает результат сравнения в виде объекта. 
//Ключами результирующего объекта будут все ключи из двух входящих объектов, 
//а значением строка с описанием отличий: added, deleted, changed или unchanged.

//Возможные значения:

//added — ключ отсутствовал в первом объекте, но был добавлен во второй
//deleted — ключ был в первом объекте, но отсутствует во втором
//changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
//unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями


genDiff(
    { one: 'eon', two: 'two', four: true },
    { two: 'own', zero: 4, four: true },
  );
  // {
  //   one: 'deleted',
  //   two: 'changed',
  //   four: 'unchanged',
  //   zero: 'added',
  // }

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
export default function genDiff(firstObj, secondObj) {
  const current = {};
  const keys1 = Object.keys(firstObj);
  const keys2 = Object.keys(secondObj);
  const uni = _.union(keys1, keys2); 
  // _.union Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
  // _.union([2], [1, 2]);
  // => [2, 1]
  for (const key of uni) {
    const check1 = Object.hasOwn(firstObj, key);
    const check2 = Object.hasOwn(secondObj, key);
    if (!check2) {
      current[key] = 'deleted';
    } else if (check2) {
      current[key] = 'added';
    } if (check1 && check2) {
      current[key] = 'changed';
    } if (firstObj[key] === secondObj[key]) {
      current[key] = 'unchanged';
    }
  }
  return current;
}

// END
