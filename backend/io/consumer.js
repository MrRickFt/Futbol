module.exports = {
    start: (io) => {  //objecto de socketio
        io.on("connection", (socket) => {
            console.log("user connected " + socket.id)

            socket.on("disconnect", () =>{
              console.log("user desconect " + socket.id);
            })

           socket.on('sendMessages', (data)=>{
               console.log(data)
               io.emit('respuesta', data)
           })
        })
    }
}