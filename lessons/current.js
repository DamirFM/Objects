// The implementation of a function 
// that extracts a value from an object 
// of any nesting depth by the specified keys. Options:

//Source object:
// Keychain (array) to search for the value
// In the case when it is impossible to get to the value, null is returned.

const data = {
    user: 'ubuntu',
    hosts: {
      0: {
        name: 'web1',
      },
      1: {
        name: 'web2',
        null: 3,
        active: false,
      },
    },
  };

  
  const keys = ['hosts', 1, 'active'];

  const getProp = (data, keys) => {
      const current = data;
      for (const key of keys) {
          const hasOwn = Object.hasOwn(current, key);
          if (!hasOwn) {
              return null;
          }
          current = current[key];
      }
return current;
  };