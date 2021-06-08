const express = require('express');
const router = express.Router();

const loggedUser = (req, res, next) => {  
  (req.user == undefined) ? res.redirect('no-permission') : next();
};

router.get('/logged', (req, res) => {
  req.user ? res.render('logged') : res.redirect('no-permission');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', loggedUser, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', loggedUser, (req, res) => {
  res.render('settings');
});

module.exports = router;