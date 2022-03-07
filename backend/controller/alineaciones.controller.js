const alineacion = require('../model/alineaciones')

const ctrlAlineacion = {}
    Alineacion = require('../model/alineaciones')
    

    
    ctrlAlineacion.create = async(req, res)=>{
    
    //desestructuramosidEquipo:  String,
    
   const {nombreJugador, posicionJugador, posicon} = req.body
    
   const newAlineacion = new Alineacion({

        posicon: posicon,
        nombeJugador: nombreJugador,
        posicionJugador: posicionJugador
        
        
    })
    console.log(alineacion)
    await newAlineacion.save()
    res.json({status:true})
}



//find general de jugadores
ctrlAlineacion.get = async(req, res) =>{
    const alineacion = await Alineacion.find({})
    res.json(alineacion)
    }


//find por url - get - ID
ctrlAlineacion.findById = async(req, res) =>{
    console.log( req.params._id )
    const dt = await Alineacion.find({ _id: req.params._id})
    res.json(dt)
}

/*
//delete por url - get - ID
ctrlDt.remove = async(req, res) =>{
    console.log(req.params._id);
    await Dt.deleteOne({ _id: req.params._id })
    res.json({ status: true})
}

//Update por put - body 
ctrlDt.update = async (req, res) => {
    console.log( req.body  )
    const {_id, nombre, equipoActual, nacionalidad } = req.body 
    let toUpdate = { nombre:nombre, equipoActual: equipoActual, nacionalidad: nacionalidad}
    await Dt.findOneAndUpdate({_id:_id}, toUpdate)
    res.json({status: true})
    }

//search por el nombre por post 
ctrlDt.search = async(req, res)=>{
const { nombre } = req.body
const dt = await  Dt.find({ nombre : { $regex: ".*" + nombre + ".*" } })
res.json(dt)
console.log(dt)
}
*/
module.exports = ctrlAlineacion