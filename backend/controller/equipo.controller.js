const equipo = require('../model/equipo')

const ctrlEquipo = {}
    Equipo = require('../model/equipo')
    

    
ctrlEquipo.create = async(req, res)=>{
    
    //desestructuramos
   const {nombre, liga, since, dt, jugadores, nacionalidad, estado} = req.body
    
   const newEquipo = new Equipo({

        nombre: nombre,
        liga: liga,
        since: since,
        dt: dt,
        jugadores: jugadores,
        nacionalidad: nacionalidad,
        estado:estado
    })
    console.log(equipo)
    await newEquipo.save()
    res.json({status:true})
}



//find general de jugadores
ctrlEquipo.get = async(req, res) =>{
    const equipos = await Equipo.find({})
    res.json(equipos)
    }


//find por url - get - ID
ctrlEquipo.findById = async(req, res) =>{
    console.log( req.params._id )
    const equipos = await Equipo.find({ _id: req.params._id})
    res.json(equipos)
}


//delete por url - get - ID
ctrlEquipo.remove = async(req, res) =>{
    console.log(req.params._id);
    await Equipo.deleteOne({ _id: req.params._id })
    res.json({ status: true})
}

//Update por put - body 
ctrlEquipo.update = async (req, res) => {
    console.log( req.body  )
    const {_id, nombre, liga, since, dt, jugadores, nacionalidad, estado } = req.body 
    let toUpdate = { name:nombre, liga: liga, since: since, dt: dt, nacionalidad: nacionalidad}
    await Equipo.findOneAndUpdate({_id:_id}, toUpdate)
    res.json({status: true})
    }

//search por el nombre por post 
ctrlEquipo.search = async(req, res)=>{
const { nombre } = req.body
const equipos = await  Equipo.find({ nombre : { $regex: ".*" + nombre + ".*" } })
res.json(equipos)
console.log(equipos)
}

/*ctrlEquipo.buscaryAddPlayer = async(req, res) =>{
    const equipos = await  Equipo.find({ nombre: nombre }, (respuesta) =>{
        console.log(equipos)
        equipos.jugadores.push({
            name: namePlayer,
            id:  idPlayer,
            posicion: posicionPlayer
        })
    } )
}*/

module.exports = ctrlEquipo