var express = require('express');
var router = express.Router();

const {add} = require('../controllers/productsController')

/* GET home page. */
router.get('/add',add);

module.exports = router;