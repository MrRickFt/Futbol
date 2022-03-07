const partido = require('../model/partido')

const crtlPartido = {}
    Partido = require('../model/partido')
    
   

  
    crtlPartido.create = async(req, res)=>{
    
        //desestructuramos
       const {equipoLocal, equipoVisitante, dia, hora, jueces,juezCentral, juezLateral1, juezLateral2,
             narrador, estado} = req.body
        
       const newPartido = new Partido({
    
            equipoLocal: equipoLocal,
            equipoVisitante: equipoVisitante,
            dia: dia,
            hora: hora,
            jueces: jueces,
                juezCentral: juezCentral,
                juezLateral1: juezLateral1,
                juezLateral2: juezLateral2,
            narrador: narrador,
            estado:estado,
           
        })
        console.log(partido)
        await newPartido.save()
        res.json({status:true})
    }



//find general
crtlPartido.get = async(req, res) =>{
    const partido = await Partido.find({})
    res.json(partido)
    }


//find por url
crtlPartido.findById = async(req, res) =>{
    console.log( req.params._id )
    const partido = await Partido.find({ _id: req.params._id})
    res.json(partido)
}


//delete por url
crtlPartido.remove = async(req, res) =>{
    console.log(req.params._id);
    await Partido.deleteOne({ _id: req.params._id })
    res.json({ status: true})
}

//Update por put - body
crtlPartido.update = async (req, res) => {
    console.log( req.body  )
    const {_id, equipoLocal, equipoVisitante, dia, hora,estado } = req.body 
    let toUpdate = { equipoLocal: equipoLocal,  equipoVisitante:equipoVisitante , dia:dia , hora:hora,
                    estado: estado}
    await Partido.findOneAndUpdate({_id:_id}, toUpdate)
    res.json({status: true})
    }

//search por el nombre por post 
crtlPartido.search = async(req, res)=>{
const { equipoLocal, equipoVisitante  } = req.body
const partido = await  Partido.find({$or: [{ equipoLocal : { $regex: ".*" + equipoLocal + ".*" }}, { equipoVisitante : { $regex: ".*" + equipoVisitante + ".*" }}]})
res.json(partido)
console.log(partido)
} 

module.exports = crtlPartido