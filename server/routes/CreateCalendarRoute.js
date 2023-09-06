const CalendarTimeModel = require('../models/CalendarTimeModel');

module.exports = async (req, res) => {
    try {
        const { start_time, finish_time, date, type, student} = req.body;

        if (!start_time || !finish_time || !date || !type) {
            res.send("all fields required");
        }

        if (type === "window") {
            if (student) {
                return (res.send("Cannot set student for availability window"));
            }
        }

        await CalendarTimeModel.create( { start_time, finish_time, date, type, student })
        res.status(201).json({
            message: "Time entry Created",
        });


    } catch(err) {
        console.log(err);
    }

};