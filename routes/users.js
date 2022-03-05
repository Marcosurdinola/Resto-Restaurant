var express = require('express');
var router = express.Router();

const { register } = require('../controllers/usersController');

/* GET users listing. */
router.get('/register', register)

module.exports = router;
