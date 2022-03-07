const jugador = require('../model/jugador')

const crtlJugador = {}
    Jugador = require('../model/jugador')
    


  
crtlJugador.create = async(req, res)=>{
    
    //desestructuramos
   const {nombre, edad, pieDom, posicion, equipoActual, nacionalidad} = req.body
    //FORMATO  MM/DD/AAAA
   let fechaNac = new Date(edad);
   let actual = new Date();
   let anios = actual.getFullYear() - fechaNac.getFullYear();
   
    
    if(anios>=5){
        const newJugador = new Jugador({

            nombre: nombre,
            edad: anios,
            pieDom: pieDom,
            posicion: posicion,
            equipoActual: equipoActual,
            nacionalidad: nacionalidad
        })
        console.log(jugador)
        await newJugador.save()
        res.json({status:true})
    }else{
        console.log("Debe ser mayor a 5 años para unirse al club");
        res.json({status:false})
    }
    
      
   
   
   
}



//find general
crtlJugador.get = async(req, res) =>{
    const jugador = await Jugador.find({})
    res.json(jugador)
    }


//find por url
crtlJugador.findById = async(req, res) =>{
    console.log( req.params._id )
    const jugador = await Jugador.find({ _id: req.params._id})
    res.json(jugador)
}


//delete por url
crtlJugador.remove = async(req, res) =>{
    console.log(req.params._id);
    await Jugador.deleteOne({ _id: req.params._id })
    res.json({ status: true})
}

//Update por put - body
crtlJugador.update = async (req, res) => {
    console.log( req.body  )
    const {_id, nombre, edad, pieDom, posicion, equipoActual, nacionalidad } = req.body 
    let toUpdate = { nombre:nombre, edad: edad, pieDom: pieDom, posicion: posicion, equipoActual: equipoActual, nacionalidad: nacionalidad }
    await Jugador.findOneAndUpdate({_id:_id}, toUpdate)
    res.json({status: true})
    }

//search por el nombre por post 
crtlJugador.search = async(req, res)=>{
const { nombre } = req.body
const jugador = await  Jugador.find({ nombre : { $regex: ".*" + nombre + ".*" } })
res.json(jugador)
console.log(jugador)
}

//search por el nombre por post 
crtlJugador.searchByTeam = async(req, res)=>{
    const { equipoActual } = req.body
    const jugador = await  Jugador.find({ equipoActual : equipoActual  })
    res.json(jugador)
    console.log(jugador)
    }

module.exports = crtlJugador