var express = require('express');
var router = express.Router();

/* GET blogposts. */
router.get('/', function(req, res, next) {
  // TODO: delete this object:
  const demoObject = {
    subject: "Computer Science",
    author: "author's name"
  }

  // TODO: Implement me:

  res.setHeader('Content-Type', 'application/json');

  res.send(JSON.stringify(demoObject));

});

module.exports = router;
