const express = require('express'),
    router = express.Router(),
    ctrlAlineacion = require('../controller/alineaciones.controller')


    router.get('/', ctrlAlineacion.get)
    router.post('/', ctrlAlineacion.create)
    router.put('/', ctrlDt.update)
    router.post('/search', ctrlDt.search)
    router.get('/:_id', ctrlAlineacion.findById)
    router.delete('/:_id', ctrlDt.remove)



module.exports = router