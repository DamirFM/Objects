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

// BEGIN (write your solution here)
export default function get (obj, keys) {
// В процессе работы мы должны постепенно заходить вглубь объекта
// и проверять наличие ключа на текущем уровне вложенности.
// Переменная current хранит содержимое объекта на текущем уровне вложенности.
// Использование переменной позволяет нам не менять параметр функции, 
// так как это является плохой практикой
  let current = obj;
  for (const key of keys) {
    const check = Object.hasOwn(current, key);
    if (!check) {
      return null;
    }

  // B current хранится переданный объект. 
  // Этой строчкой мы перезаписываем эту переменную, 
  // передавая туда значение объекта под ключом key
    current = current[key]
  }
  return current;
}
// END