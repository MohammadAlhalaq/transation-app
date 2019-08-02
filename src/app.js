const express = require('express');
const { join } = require('path');
const compression = require('compression');

const controller = require('./router');

const app = express();

app.disable('x-powerd-by');
app.set('port', process.env.PORT || 3012);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.use(controller);

module.exports = app;
