const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup');
});



module.exports = router;
