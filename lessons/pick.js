// Implement and export a default function 
// that transforms the passed object into another 
// object that includes only the specified properties. Options:
// Source object
// Array of property names

const array = ['none', 'cores'];

const obj = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
  };

const pick = (obj, array) => {
    const result = {};
    const keys = Object.keys(obj);

    for (const key of array) {
        if (Object.hasOwn(array, key)) {
            result[key] = obj[key];
        }
    }
console.log(result);
return result;

};
// export default pick;