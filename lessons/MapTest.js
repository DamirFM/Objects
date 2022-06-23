// A set of functions for working with a dictionary built on a hash table. 
// For simplicity, our implementation does not support collision resolution.

// As a matter of fact in this task it is necessary to implement objects. 
// For obvious reasons, you can't use objects to create objects. 
// Imagine that there are no objects in the language and we want to add them.

// make() - creates a new dictionary

// set(map, key, value) - sets the value in the dictionary by key. 

// Works for both creation and modification. 
// The function returns true if the value was successfully set. 
// When a collision occurs, the function does not change the dictionary in any way and returns false

// get(map, key, defaultValue = null) - returns the value of the specified key. 
// The defaultValue parameter is the value that the function returns if there is no key in the dictionary (default is null). 
// If a collision occurs, the function also returns a default value
// The set() and get() functions take a dictionary as their first parameter. 
// The pass is by reference, so set() can change it directly.

const make = () => {

};
export default make;

const set = (map, key, value) => {

};
export default set;

const get = (map, key, defaultValue = null) => {

};

export default get;