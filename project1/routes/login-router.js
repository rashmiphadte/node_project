var  express, router;

express = require('express');

router = express.Router();

router.get('/', function(req, res) {
  console.log("hello")
    return res.send("hello");
});

module.exports = router;