// A function that counts the number of words in a sentence, 
// and returns an object. In the object, the properties are the words 
// (reduced to lowercase), and the values are the number of times the word occurs in the sentence. 
// Words in a sentence can be in different registers. 
// Before counting, they must be reduced to lowercase so that duplicates are not skipped.

import _ from 'lodash';

// BEGIN (write your solution here)
const countWords = (words) => {
  const result = {};
  const newList = words.toLowerCase();
  const array = _.words(newList);
  console.log(newList);
 

  for (const name of array) {
 
    // Existence test
    if (Object.hasOwn(result, name)) {
      result[name] += 1;
    } else {
      result[name] = 1;
    }
  }

  return result;
};
export default countWords;
// END