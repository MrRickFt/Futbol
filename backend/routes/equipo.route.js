const express = require('express'),
    router = express.Router(),
    ctrlEquipo = require('../controller/equipo.controller')


    router.get('/', ctrlEquipo.get)
    router.post('/', ctrlEquipo.create)
    router.put('/', ctrlEquipo.update)
    router.post('/search', ctrlEquipo.search)
    router.get('/:_id', ctrlEquipo.findById)
    router.delete('/:_id', ctrlEquipo.remove)
    //router.post('/:nombre', ctrlEquipo.buscaryAddPlayer)



module.exports = router