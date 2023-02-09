

// BEGIN (write your solution here)
export default function genDiff(firstObj, secondObj) {
    const thirdObj = Object.assign(secondObj, firstObj); 
    const keys = Object.keys(thirdObj);
    console.log(thirdObj.one)
    for (const key of keys) {
      
      const hasProperty = Object.hasOwn(secondObj, key); 
      if (!hasProperty) {
        
      }
  
    }
    
    
    return thirdObj;
  
  
    
  }
  
  // END