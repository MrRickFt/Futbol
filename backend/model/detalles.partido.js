const mongoose = require('mongoose') //libreria u orm para conectarnos con mongodb y hacer consultas,
const { stringify } = require('nodemon/lib/utils')
    
//definición del esquema
const detallesPartidoSchema = new mongoose.Schema
({
    
    idPartido: String,
    resultado: String,
    tiempoExtra: {type: String, default: "No"},
    penaltis: String,
    detallesGoles: String,
    tarjetas:String,
    cambiosJugadores:String,
    jugadorDestacado: String,
    jugadaVar: [],
    hinchada: {type:Number,  default: 2000}
})

module.exports =  mongoose.model('detallesPartido', detallesPartidoSchema )


