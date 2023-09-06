const express = require('express');
const router = express.Router();


const createCalendarRoute = require('./routes/CreateCalendarRoute');
const deleteCalendarRoute = require('./routes/DeleteCalendarRoute');
const getCalendarRoute = require('./routes/getCalendarRoute');

const loginRoute = require('./routes/loginRoute.js');
const signupRoute = require('./routes/signupRoute');
const deleteUserRoute = require('./routes/deleteUserRoute');

router.post('/login', loginRoute);
router.post('/signup', signupRoute);
router.delete('/signup', deleteUserRoute);


router.post('/calendar', createCalendarRoute);
router.delete('/calendar', deleteCalendarRoute);
router.get('/calendar/:date', getCalendarRoute);





module.exports = router;