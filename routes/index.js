var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express!!',
                        name: 'Peyton Petschow!',
                        age : 28,
                        city: 'Sachse',
                        state: 'TX',
                        message: "Welcome to Edge Tech Academy",
                         });
});

module.exports = router;
