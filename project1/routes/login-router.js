var  express, router;

express = require('express');

router = express.Router();

router.get('/', function(req, res) {
  console.log("hello")
    return res.send("hello");
});
router.post('/', function(req, res) {
    return res.send("this is post call");
});

module.exports = router;