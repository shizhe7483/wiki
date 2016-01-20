var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');

/* GET users listing. */
router.post('/', function(req, res, next) {
  //console.log(req);
  //mongoose.model('userid', req.body.userId)
  var Schema = mongoose.Schema,
     ObjectId = Schema.ObjectId;

  var BlogPost = new Schema({
      name: String
  });
  var Kitten = mongoose.model('Kitten', BlogPost);
  var silence = new Kitten({ name: req.body.userId });

  // Kitten.find(function (err, kittens) {
  //   if (err) return console.error(err);
  //   console.log(kittens)
  // });

  res.send(silence.name);
});

module.exports = router;
