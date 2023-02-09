


import _ from 'lodash';

// BEGIN (write your solution here)
export default function genDiff(firstObj, secondObj) {
  const thirdObj = Object.assign(secondObj, firstObj); 
  const entries = Object.entries(thirdObj);
  let result = {}
  for (const [key, value] of entries) {
    
    if (Object.hasOwn(secondObj, key)); 
     {
      result[key] = 'added';
    }

  }
  
  console.log(result)
  return result;


  
}

// END