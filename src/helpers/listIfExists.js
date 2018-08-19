const listIfExists = (array) => array.filter(item => !!item).join(', ');

export default listIfExists;
