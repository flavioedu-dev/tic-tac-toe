const Player = require('../models/playerModel')

const addPlayer = async (req, res) => {

    let player = new Player(req.body)
    
    try {
        let doc = await player.save()
        console.log(doc)
        
    } catch (error) {
        console.log(error)
    }
}



module.exports = { addPlayer }