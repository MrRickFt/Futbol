const express = require('express'),
    router = express.Router(),
    crtlDetalle = require('../controller/detalles.partido.controller')


    router.get('/', crtlDetalle.get)
    router.post('/', crtlDetalle.create)
    



module.exports = router