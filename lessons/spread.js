// A spread statement is three dots before 
// a variable (or constant) name, inside an object definition. 
// It lays out the corresponding object inside a new object.
//  It can only get a copy, it cannot modify existing objects.

// An implementation of a function that creates a company object and returns it. 
// To create a company, only one property is required - the name of the company. 
// Other properties are added only if they exist. Options:

// Name
// Object with additional properties
// Companies also have two properties with default values:

// state - moderating
// createdAt is the current date (in Unix time format. 
// This number is the number of milliseconds that have passed since midnight, January 1, 1970)

const make = (item, data) => {
  const company = { name: item };
  const start = Date.now();
  const defObj = { state: 'moderating', createdAt : start };
  const mergedObject = { ...company, ...defObj, ...data, };
  console.log(mergedObject);
 return mergedObject;

};