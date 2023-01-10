var express = require('express');
var router = express.Router();
const fetch = (...args) =>
  import('node-fetch').then(({default: fetch}) => fetch(...args))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DIE!!!' });
});

/* GET test page */
router.get('/test', function (req, res) {
  res.render('test', {title: "Testin'" })
})

module.exports = router;
