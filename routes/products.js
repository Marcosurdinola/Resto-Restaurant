var express = require('express');
var router = express.Router();

const {add, edit} = require('../controllers/productsController')

/* GET home page. */
router.get('/add',add);
router.get('/edit', edit)

module.exports = router;