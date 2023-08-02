const CalendarModel = require('../models/CalendarModel');

module.exports = async (req, res) => {
    const calendar = await CalendarModel.find()
    res.json(calendar);
};c