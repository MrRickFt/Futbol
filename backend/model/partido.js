const mongoose = require('mongoose') //libreria u orm para conectarnos con mongodb y hacer consultas,
const { stringify } = require('nodemon/lib/utils')
    
//definición del esquema
const partidoSchema = new mongoose.Schema
({
    equipoLocal: {type: String, uppercase: true},
    equipoVisitante: {type: String, uppercase: true},
    dia: String,
    hora: String,
    juezCentral: {type: String, default: "Mario Laerman "},
    juezLat1: {type: String, default: "Samir Abdur "},
    juezLat2: {type: String, default: "Asir Medel "},
    narrador: {type: String, default: "Mario Cote Locutor"},
    estado: {type: String, default: " "}
   
})

module.exports =  mongoose.model('partido', partidoSchema )