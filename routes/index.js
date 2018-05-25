var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController');

router.get('/', indexController.login);

module.exports = router;
