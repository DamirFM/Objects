

// BEGIN (write your solution here)
export default function build(data) {
 
    const entries = Object.entries(data);
  
    for (const [key, value] of entries) {
      
      console.log(key);
      console.log(value)
    }
    if (data) {
      return ''
    }
  }
  // END