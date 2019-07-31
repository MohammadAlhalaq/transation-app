/* eslint-disable import/no-unresolved */
const express = require('express');
const { join } = require('path');
const compression = require('compression');

const app = express();

app.disable('x-powerd-by');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));

module.exports = app;
