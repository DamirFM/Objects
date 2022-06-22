// A function that "normalizes" the data of the passed lesson. 
// That is, it leads them to a certain form. Normalization occurs by changing the original object.

const normalize = (lesson) => {
    lesson.name = _.capitalize(lesson.name);
    lesson.description = lesson.description.toLowerCase();
  };
  
  export default normalize;