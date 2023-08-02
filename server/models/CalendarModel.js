const mongoose = require('mongoose');

const CalendarSchema = new mongoose.Schema({
    start_time: {
        tye: Number,
    },
    finish_time: {
        type: Number,
    },
    date: {
        type: Number,
    },
    student: {
        type: String,
    }
});

const CalendarModel = mongoose.model('Calendar', CalendarSchema);

module.exports = CalendarModel;