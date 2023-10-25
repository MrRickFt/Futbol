const express = require('express'),
    router = express.Router(),
    crtlPartido = require('../controller/partido.controller')


    router.get('/', crtlPartido.get)
    router.post('/', crtlPartido.create)
    router.put('/', crtlPartido.update)
    router.post('/search', crtlPartido.search)
    router.get('/:_id', crtlPartido.findById)
    router.delete('/:_id', crtlPartido.remove)



module.exports = router