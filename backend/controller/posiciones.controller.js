const posiciones = require('../model/posiciones')

const ctrlPosiciones = {}
    Posiciones = require('../model/posiciones')

//find general de jugadores
ctrlPosiciones.get = async(req, res) =>{
    const posiciones = await Posiciones.find({}).select("-_id -__v -[]")
    res.json(posiciones)
    }


module.exports = ctrlPosiciones