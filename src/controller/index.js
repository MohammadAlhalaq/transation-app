const express = require('express');

const search = require('./search');

const router = express.Router();

router.post('/search', search.post);

module.exports = router;
