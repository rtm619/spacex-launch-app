export default (object = {}) => {
  const queryStringArray = Object.keys(object).map((key) => `${key}=${object[key]}`);
  return queryStringArray.join('&');
};
