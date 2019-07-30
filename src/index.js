const app = require('./app');

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`server now listen to http://localhost:${app.get('port')}`);
});
