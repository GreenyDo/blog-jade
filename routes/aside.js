var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/async_io', function(req, res, next) {
  res.render('async_io');
});


module.exports = router;