const express = require('express'),
    router = express.Router(),
    ctrlJugador = require('../controller/jugador.controller')


    router.get('/', ctrlJugador.get)
    router.post('/', ctrlJugador.create)
    router.put('/', ctrlJugador.update)
    router.post('/search', ctrlJugador.search)
    router.post('/searchByTeam', ctrlJugador.searchByTeam)
    router.get('/:_id', ctrlJugador.findById)
    router.delete('/:_id', ctrlJugador.remove)



module.exports = router