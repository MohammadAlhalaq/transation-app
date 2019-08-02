const reqProm = require('request-promise');

const translateReq = url => reqProm(url)
  .then(res => res)
  .catch(err => err);
module.exports = { translateReq };
