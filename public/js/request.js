const createXhr = url => new Promise((resolved, rejected) => {
  fetch(url)
    .then(res => resolved(res))
    .catch(err => rejected(err));
});
// parses JSON response into native JavaScript objects
