const mongoose = require('mongoose');

const CalendarTimeSchema = new mongoose.Schema({
    start_time: {
        type: String,
    },
    finish_time: {
        type: String,
    },
    date: {
        type: Date,
    },
    type: {
        type: String, 
    },
    student: {
        type: String,
    }
});

const CalendarTimeModel = mongoose.model('CalendarTime', CalendarTimeSchema);

module.exports = CalendarTimeModel;