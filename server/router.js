const express = require('express');
const isLoggedIn = require('./Middlware/isLoggedIn');
const router = express.Router();

router.post('/login', isLoggedIn, require('./routes/loginRoute'));


router.get('/calendar', require('./routes/calendarRoute'));
router.post('/calendar', require('./routes/CreateCalendarRoute'));
// TODO update and delete 

router.get('/home', require('./routes/homeRoute'));


module.exports = router;