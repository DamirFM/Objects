// I have implemented a function that does a deep copy of objects.
// For the solution, I need to sequentially traverse the original 
// object and copy its data to another object. 
// If the value of some property is an object, 
// then you need to recursively run the implemented function.

const cloneDeep = (object) => {
  const result = {};
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    result[key] = isObject(value) ? cloneDeep(value) : value;
  }
console.log(result);
  return result;
};