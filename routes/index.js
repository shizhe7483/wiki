var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    "user": "Tom",
    "favor": [ "Apple", "Orange", "Bananer" ]
  }, function(err, html){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  });
});


module.exports = router;
