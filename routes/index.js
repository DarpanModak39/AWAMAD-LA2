const { query, json } = require('express');
var express = require('express');
var router = express.Router();

router.get('/vehicalform.html', function(req, res, next) {
  res.sendFile('../public/vehicalfrom.html');
});

router.get('/registered', function(req, res, next) {
    res.send(req.query);
});

module.exports = router;
