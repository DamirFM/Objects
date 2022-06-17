// I have implemented a function that does a deep copy of objects.
// For the solution, I need to sequentially traverse the original 
// object and copy its data to another object. 
// If the value of some property is an object, 
// then you need to recursively run the implemented function.

const cloneDeep = (data) => {

    const keys = Object.keys(data);
    for (const [key] of keys) {
      const current = Object.assign({}, data);
      console.log(current);
      if (_.isObject(key)) {
        Object.entries(current)
      }
    }
  
  };