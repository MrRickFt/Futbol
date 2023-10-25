const Posiciones = require('../model/posiciones')
   
   exports.createPosiciones = () =>{
    var posiciones = new Posiciones({
    nombre: ["portero",
        "defensa central",
        "lateral derecho",
        "lateral izquierdo",
        "mediocampista",
        "volante ofensivo derecho",
        "volante ofensivo izquierdo",
        "punta izquierda",
        "punta derecha",
        "delantero centro"
         ]
    
 
    })
    

      

    
         
    posiciones.save()
}



