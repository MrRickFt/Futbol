const mongoose = require('mongoose') //libreria u orm para conectarnos con mongodb y hacer consultas,
    
//definición del esquema
const arbitrosSchema = new mongoose.Schema
({
    nombre: {type: String, uppercase: true},
    tipo: String,
    nacionalidad : String,
    estado: {type: String, default: "libre"}
   
})

module.exports =  mongoose.model('arbitros', arbitrosSchema )