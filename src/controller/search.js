/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const reqPromes = require('request-promise');

exports.post = (req, res) => {
  const word = req.body.input;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=e60d1f76001c4655e361864c383b4640&query=${word}&page=1&include_adult=false`;

  reqPromes(url)
    .then((apiRes) => {
      res.send(apiRes);
    })
    .catch(e => console.log(e));
};
