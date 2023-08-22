const CalendarModel = require('../models/CalendarModel');

module.exports = async (req, res) => {
    const {student} = req.body;
    console.log(student)
    const calendar = new CalendarModel({
        student,
    })
    const newCalendar = await calendar.save();
    res.json(newCalendar);
};