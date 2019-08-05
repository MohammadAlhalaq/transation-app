const { translateReq } = require('./../request');
require('dotenv').config();

exports.get = (req, res) => {
  const { word, langfrom, langto } = req.query;
  const apiKey = process.env.API_KEY;
  const query = encodeURIComponent(word);
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?text=${query}&lang=${langfrom}-${langto}&key=${apiKey}`;
  translateReq(url)
    .then(result => res.send(result))
    .catch(err => err);
};
