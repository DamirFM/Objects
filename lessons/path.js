// accepting the site name as input and returning information about it:
const getDomainInfo = (file) => {
    let scheme = '';
    if (file.startsWith('https://')) {
      scheme = 'https';
    } else {
      scheme = 'http';
    }
    const name = file.replace(`${scheme}://`, '');
    return {scheme, name};
  };
  // export default getDomainInfo;