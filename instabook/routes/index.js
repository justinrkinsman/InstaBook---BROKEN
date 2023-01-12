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

/* GET sign up page */
router.get('/signup', function(req, res, next) {
  res.render('signup.pug', {title: "Sign Up"})
})

/* GET success login page */
router.get('/success-login', function(req, res, next) {
  res.render('success.pug', {title: 'Welcome'})
})

router.get('/failed-login', function(req, res, next) {
  res.render('failure.pug', {title: 'Failyour'})
})

module.exports = router;
