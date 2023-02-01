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


export default function make(companyName, data) {
  const state = 'moderating';
  const createdAt = Date.now();
  const company = { name: companyName, state: state, createdAt: createdAt, ...data};
  return company;
}

// В современном JavaScript добавили специальный оператор,
// который позволяет выполнять ту же задачу немного короче и, 
// главное, нагляднее. Он называется spread оператор 
// (на русском его так и называют "спред оператор"). 
// Простое поверхностное копирование с помощью спреда:

// Поверхностное копирование
// const copyOfUser = { ...user };
// Object.assign({}, user);