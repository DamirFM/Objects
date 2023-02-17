
// BEGIN (write your solution here)
export default function scrabble(simbols, word) {
    const lowSimbols = simbols.toLowerCase();
    const values = Object.values(lowSimbols);
    
    const result = {};
    for (const value of values) {
      if (Object.hasOwn(result, value)) {
        result[value] += 1;
      } else {
        result[value] = 1
      }
    }
    
   console.log(result)
   }
  // END