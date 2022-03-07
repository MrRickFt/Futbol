const mongoose = require('mongoose') //libreria u orm para conectarnos con mongodb y hacer consultas,
    
//definición del esquema
const posicionesSchema = new mongoose.Schema
({
    nombre: String
   
})

module.exports =  mongoose.model('posiciones', posicionesSchema )