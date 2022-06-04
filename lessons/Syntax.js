//The default implementation and export of a function that returns an object.

const getJsonFileData = () => { 
    const example = {
      "files": [
        "src/objects.js"
      ],
      "config": true
    }
    return example;
    };

    console.log(example.config);
    export default getJsonFileData;
