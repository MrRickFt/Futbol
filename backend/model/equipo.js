const mongoose = require('mongoose') //libreria u orm para conectarnos con mongodb y hacer consultas,
    
//definición del esquema
const equipoSchema = new mongoose.Schema
({
    nombre: {type: String, uppercase: true},
    liga: String,
    since: String,
    dt: {type:String, default: "no dt"},
    jugadores:[{name: {type: String, default: " "}, id: {type: String, default: " "}, posición: {type: String, default: " "}}],
    nacionalidad : String,
    estado: {type: String, default: "Free"}
   
})

module.exports =  mongoose.model('equipo', equipoSchema )