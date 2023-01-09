// A function that compares objects by matching data, not by reference. 
// This function takes two companies as input and returns true 
// if their structure is the same, and false otherwise. 
// The check should go through the properties name, state, website.

export default (company1, company2) => {
    const keys = ['name', 'state', 'website'];
    for (const key of keys) {
      if (company1[key] !== company2[key]) {
        return false;
      }
    }
  
    return true;
  };

//



function is(one, two) {
  const absValue = (one.name === two.name && one.state === two.state && one.website === two.website)
    ? true : false;
  return absValue;
}