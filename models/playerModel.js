const mongoose = require("mongoose")

const playerSchema = new mongoose.Schema({
    jog1: { type: String, required: true },
    jog2: { type: String, required: true },
    score: { type: Number, default: 0 }
})

module.exports = mongoose.model('Player', playerSchema)