var express = require('express');
var router = express.Router();
const fetch = (...args) =>
  import('node-fetch').then(({default: fetch}) => fetch(...args))

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.user) {
    res.redirect('/login')
  }
  res.render('index.pug', { title: 'InstaBook' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login.pug', {title: "Login"})
})

module.exports = router;
