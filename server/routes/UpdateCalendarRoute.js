const { model } = require('mongoose');
const CalendarModel = require('../models/CalendarModel');

module.exports = async (req, res) => {
    const {id} = req.params;
    const calendarEntry = await CalendarModel.findById(id);
    console.log(calendarEntry)
    calendarEntry.student = req.body.student;
    await calendarEntry.save();
    res.json(calendarEntry);
};