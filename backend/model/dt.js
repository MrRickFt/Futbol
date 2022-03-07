const mongoose = require('mongoose') //libreria u orm para conectarnos con mongodb y hacer consultas,
    
//definición del esquema
const dtSchema = new mongoose.Schema
({
    nombre: {type: String, uppercase: true},
    equipoActual: {type:String, default: "no team"},
    nacionalidad : String
   
})

module.exports =  mongoose.model('dt', dtSchema )