const { translateReq } = require('./../request');
require('dotenv').config();

exports.get = (req, res) => {
  const { word } = req.query;
  const apiKey = process.env.API_KEY;
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?text=${word}&lang=en-ar&key=${apiKey}`;
  translateReq(url)
    .then(result => res.send(result))
    .catch(err => err);
};
