//Реализуйте и экспортируйте функцию по умолчанию, которая принимает 
//на вход массив, состоящий из массивов-пар и возвращает объект, полученный из этих пар.

//Примечания
//Если при конструировании объекта попадаются совпадающие ключи, 
//то берётся значение из последнего массива-пары:


//fromPairs([['cat', 5], ['dog', 6], ['cat', 11]])
// { 'cat': 11, 'dog': 6 }


// BEGIN
const fromPairs = (data) => {
    const result = {};
  
    for (const [key, value] of data) {
      result[key] = value;
    }
  
    return result;
  };
  
  export default fromPairs;
  // END

  // BEGIN (write your solution here)
export default function pairs(array) {
    const result = {};
    const values = Object.values(array); 
    for (const value of values) {
      if (Object.hasOwn(array, value)) {
        result[value[0]] = result;
      } else {
        result[value[0]] = value[1];
      }
    }
    return result;
  }
    
  
  // END