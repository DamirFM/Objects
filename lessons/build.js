

// BEGIN (write your solution here)
export default function build(data) {
 
    const entries = Object.entries(data);
  
    for (const [key, value] of entries) {
      const name1 = key;
      const name2 = value;
      const result = `${name1}=${name2}`
      console.log(result)
      return result;
     
    }
    if (data) {
      return ''
    }
  }
  // END