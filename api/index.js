const express = require('express')
const app = express()
const port = 3001
const timeSlots = require('./timeSlots.json')

let timeSlotsAvailable = timeSlots

const mutateTimeSlotData = (timeSlotId, data) => {
    const targetSlot = getTimeSlotById(timeSlotId)
    targetSlot.data = {...data}

    return timeSlotsAvailable
}

const getTimeSlotById = (timeSlotId) => {
    return timeSlotsAvailable.filter(x => x.time_slot_id == timeSlotId)
}
    
app.get('/api/time-slots', (req, res) => {
    // data retrieval from database
    res.send(timeSlotsAvailable)
})
 
app.get('/api/time-slot/:id', (req, res) => {
    const timeSlotId = req.params.id
    res.send(getTimeSlotById(timeSlotId))
})

app.put('/api/time-slot', (req, res) => {
    res.send(mutateTimeSlotData(req.body.id, req.body.time_slot_data))
})

app.listen(port)