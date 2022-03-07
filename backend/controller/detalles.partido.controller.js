const detalle = require('../model/detalles.partido')

const crtlDetalle = {}
    Detalle = require('../model/detalles.partido')
    

  

    crtlDetalle.create = async(req, res)=>{
    
    //desestructuramos
   const {idPartido, resultado,  tiempoExtra,penaltis, detallesGoles, tarjetas,
    cambiosJugadores, jugadorDestacado,  jugadaVar} = req.body
   
    const newDetalle = new Detalle({

        idPartido: idPartido,
        resultado: resultado,
        tiempoExtra: tiempoExtra,
        penaltis: penaltis,
        detallesGoles: detallesGoles,
        tarjetas:tarjetas,
        cambiosJugadores:cambiosJugadores,
        jugadorDestacado: jugadorDestacado,
        jugadaVar: jugadaVar,
       

    })
    console.log(detalle)
    await newDetalle.save()
    res.json({status:true})
}
    
      
//find general
crtlDetalle.get = async(req, res) =>{
    const detalle = await Detalle.find({})
    res.json(detalle)
    }





module.exports = crtlDetalle

