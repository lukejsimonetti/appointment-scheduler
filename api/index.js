var express = require('express')
var app = express()
var port = 3001
var timeSlots = require('./timeSlots.json')
var bodyParser = require('body-parser');

let timeSlotsAvailable = timeSlots

const mutateTimeSlotData = (timeSlotId, data) => {
    const targetSlot = getTimeSlotById(timeSlotId)[0]
    const i = timeSlotsAvailable.indexOf(targetSlot)
    timeSlotsAvailable[i].data = data

    return timeSlotsAvailable
}

const getTimeSlotById = (timeSlotId) => {
    return timeSlotsAvailable.filter(x => x.time_slot_id == timeSlotId)
}

app.use(bodyParser.json({limit: '50mb'}));

app.get('/api/time-slots', (req, res) => {
    // data retrieval from database
    res.send(timeSlotsAvailable)
})
 
app.get('/api/time-slot/:id', (req, res) => {
    const timeSlotId = req.params.id
    res.send(getTimeSlotById(timeSlotId))
})

app.put('/api/time-slot', (req, res) => {
    res.send(mutateTimeSlotData(req.body.data.timeSlotId, req.body.data.formData))
})

app.listen(port)