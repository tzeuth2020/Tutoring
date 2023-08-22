const express = require('express');
const isLoggedIn = require('./Middlware/isLoggedIn');
const router = express.Router();

const readCalendarRoute = require('./routes/ReadCalendarRoute.js');
const createCalendarRoute = require('./routes/CreateCalendarRoute');
const updateCalendarRoute = require('./routes/UpdateCalendarRoute');
const deleteCalendarRoute = require('./routes/DeleteCalendarRoute');

const loginRoute = require('./routes/loginRoute.js');
const signupRoute = require('./routes/signupRoute');
const deleteUserRoute = require('./routes/deleteUserRoute');

router.post('/login', loginRoute);
router.post('/signup', signupRoute);
router.delete('/signup', deleteUserRoute);



router.get('/calendar', readCalendarRoute);
router.post('/calendar', createCalendarRoute);
router.put('/calendar/:id', updateCalendarRoute);
router.delete('/calendar/:id', deleteCalendarRoute);



router.get('/home', require('./routes/homeRoute'));


module.exports = router;