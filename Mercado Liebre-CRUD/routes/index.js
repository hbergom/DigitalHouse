const express = require("express");
const router = express.Router();

const indexControllers = require('../controllers/indexControllers')

/* HOME */
router.get('/', indexControllers.index); // HOME
router.get('/search', indexControllers.search); // HOME


module.exports = router;
