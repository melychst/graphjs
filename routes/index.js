var express = require('express');
var url = require("url");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  //var reqArgs = url.parse(req.url);
  //console.log(reqArgs);
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
