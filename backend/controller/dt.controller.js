const dt = require('../model/dt')

const ctrlDt = {}
    Dt = require('../model/dt')
    

    
ctrlDt.create = async(req, res)=>{
    
    //desestructuramos
   const {nombre, equipoActual, nacionalidad} = req.body
    
   const newDt = new Dt({

        nombre: nombre,
        equipoActual: equipoActual,
        nacionalidad: nacionalidad
        
    })
    console.log(dt)
    await newDt.save()
    res.json({status:true})
}



//find general de jugadores
ctrlDt.get = async(req, res) =>{
    const dt = await Dt.find({})
    res.json(dt)
    }


//find por url - get - ID
ctrlDt.findById = async(req, res) =>{
    console.log( req.params._id )
    const dt = await Dt.find({ _id: req.params._id})
    res.json(dt)
}


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

module.exports = ctrlDt