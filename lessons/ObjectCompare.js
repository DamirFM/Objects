

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
export default function genDiff(firstObj, secondObj) {
  const thirdObj = Object.assign(firstObj, secondObj);
  let current = thirdObj;
  const keys = Object.keys(thirdObj);
  const uni = _.union(keys);
  for (const key of uni) {
    if (_.has(secondObj, key)){
      current[key] = 'added';
    }
    else if (_.has(firstObj, key)){
      current[key] = 'deleted';
    }
    else if (_.has(firstObj, key) && _.has(secondObj, key)) {
      current[key] = 'changed';
    }

    

  }
  
  console.log(current)
  return current;


  
}

// END
