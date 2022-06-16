// Implement and export by default a function 
// that populates an object with data from another object
//  based on a permitted list of keys. Options:

// Source object:
// List of keys to be replaced
// Data to be merged into the source object
// In the case when the list of keys is empty, you need to merge all the data completely.

// I used the helper function _.pick from the lodash library


const object = (company, array, data) => {
  let filtred = {};
  if (array.length > 0) {
    filtred = _.pick(data, array);
  } else {
    filtred = data;
  }
  Object.assign(company, filtred); 
};
export default object;