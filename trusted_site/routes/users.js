var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/csrf', function(req, res, next) {
  res.send('respond with a resource');
  console.log(req.body);
  console.log(req.cookies);
});

module.exports = router;
