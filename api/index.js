const express = require('express')
const app = express()
const port = 3001
const timeSlots = require('./timeSlots.json')

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
    
app.get('/api/available-slots', (req, res) => {
    res.send(timeSlots)
})

// app.get('/', (req, res) => {
//     res.send(timeSlots)
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))