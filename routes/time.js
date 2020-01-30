var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/now', function(req, res, next) {
    let now = new Date();
  res.render('time', {now: now.getHours()+":"+now.getMinutes()+":"+now.getSeconds() 
});
});
module.exports = router;