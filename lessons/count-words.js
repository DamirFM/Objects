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