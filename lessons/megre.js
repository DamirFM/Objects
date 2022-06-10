const merge = (object, keys, data) => {
    const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
    Object.assign(object, filteredData);
  };