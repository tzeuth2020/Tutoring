const { model } = require("mongoose")
const CalendarTimeModel = require('../models/CalendarTimeModel');

module.exports = async (req, res) => {
    try {
        const {start_time, finish_time, date, type, student} = req.body;
        console.log(start_time);
        if (!start_time || !finish_time || !date || !type) {
            res.send("all fields required");
        }

        if (type === "window") {
            const hasDate = await CalendarTimeModel.findOne({ date });
            if (hasDate) {
                await CalendarTimeModel.deleteOne( {start_time, finish_time, date, type} );
            } else {
                return res.status(400).json({message: "Cannot Delete: Date has not been set"});
            }
        } else {
            const hasTime = await CalendarTimeModel.findOne({ start_time, finish_time });
            if (hasTime) {
                await CalendarTimeModel.deleteOne({ start_time, finish_time, date, student });
            } else {
                return res.status(400).json({message: "Cannot Delete: Time has not been set"});
            }
        }
        res.status(201).json({
            message: "Time entry Deleted",
        });

    } catch(err) {
        console.log(err);
    }

};