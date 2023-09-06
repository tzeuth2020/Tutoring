const CalendarTimeModel = require('../models/CalendarTimeModel');

module.exports =  async (req, res) => {
    try {
        const { date } = req.params;
        console.log(date);
        const day = new Date(date);
        day.setHours(0, 0, 0, 0);
        console.log(day);
        const allEntries = await CalendarTimeModel.find( { date: day } );
        console.log(allEntries);
        res.send(allEntries);
    } catch (err) {
        console.log(err);
    }
}