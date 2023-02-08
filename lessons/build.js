// Реализуйте и экспортируйте функцию по умолчанию, 
// которая принимает на вход список параметров 
// и возвращает сформированный query string из этих параметров:


 
// bqs({ per: 10, page: 1 });
// page=1&per=10
// bqs({ param: 'all', param1: true });
// param=all&param1=true
// Имена параметров в выходной строке должны располагаться 
// в алфавитном порядке (то есть их нужно отсортировать).

// BEGIN (write your solution here)
export default function build(data) {
    const total = [];
    const entries = Object.entries(data);
    const sortedEntries = entries.sort();
    for (const [key, value] of sortedEntries) {
      total.push(`${key}=${value}`);
    }
    return total.join('&');
  }
  // END