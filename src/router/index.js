const express = require('express');
const translate = require('./translate');
const error = require('./error');

const router = express.Router();
router.get('/translate', translate.get);

router.use(error.client);
router.use(error.server);
module.exports = router;
