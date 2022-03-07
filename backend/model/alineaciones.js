const { type } = require('express/lib/response')
const mongoose = require('mongoose') //libreria u orm para conectarnos con mongodb y hacer consultas,
    
//definición del esquema
const AlineacionSchema = new mongoose.Schema
({
    nombreEquipo:  String,
    posicion:  [{nombreJugador: String, posicionJugador: String}]
    
   
})

module.exports =  mongoose.model('alineacion', AlineacionSchema )