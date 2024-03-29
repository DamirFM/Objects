// A function that takes a list of users as input, 
// extracts their names, sorts them alphabetically, and returns a sorted list of names.

const mainList =    [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' }
  ];

  const getSortedNames = (names) => {
    const result = [];
    for (const item of names) {
      const values = Object.values(item);
      const [prop] = values;
      result.push(prop);
      result.sort();
    }
  
    return result;
  };
  
  
  export default function sort(arr) {
    const names = arr.map((user) => user.name);
    return names.sort();
  }