const mongoose = require('mongoose') //libreria u orm para conectarnos con mongodb y hacer consultas,
    
//definición del esquema
const jugadorSchema = new mongoose.Schema
({
    nombre: {type: String, uppercase: true},
    edad: String,
    pieDom: String,
    posicion: String,
    equipoActual: {type:String, default: "no team"},
    nacionalidad : String,
   
})

module.exports =  mongoose.model('jugador', jugadorSchema )