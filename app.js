const express = require('express')
const app = express()
const mongoose = require('mongoose')

const playerRoute = require('./routes/playerRoute')

mongoose.connect('mongodb://localhost:27017/players')

let db = mongoose.connection

db.on('error', (err) => { console.log(err) })

db.once('open', () => {
    console.log('Banco conectado...')
})

app.use('/', playerRoute)

app.listen(3000, () => {
    console.log('Server running in port 3000...')
})