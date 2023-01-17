// Implement and export a default function 
// that transforms the passed object into another 
// object that includes only the specified properties. Options:
// Source object
// Array of property names

// const array = ['none', 'cores'];

// const obj = {
//    user: 'ubuntu',
//    cores: 4,
//    os: 'linux',
//  };


// BEGIN (write your solution here)
export default function pick(obj, array) {
 // In this step will create the object
    const result = {};
    for (const key of array) {
    // here we will enumerate elements and check 
    // if existing object has the indicated property 
      if (Object.hasOwn(obj, key)) {
        result[key] = obj[key];
      }
    }
    
    return result;
  }
  // END