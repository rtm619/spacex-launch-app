export default (object = {}) => {
  const allKeys = Object.keys(object);
  const queryStringArray = Object.values(object).map((value, index) => `${allKeys[index]}=${value}`);
  return queryStringArray.join('&');
};
