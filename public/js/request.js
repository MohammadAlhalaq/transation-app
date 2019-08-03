const createXhr = url => new Promise((resolved, rejected) => {
  fetch(url)
    .then(res => resolved(res.json()))
    .catch(err => rejected(err));
});
