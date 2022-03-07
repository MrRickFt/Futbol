const express = require('express'),
    router = express.Router(),
    ctrlDt = require('../controller/dt.controller')


    router.get('/', ctrlDt.get)
    router.post('/', ctrlDt.create)
    router.put('/', ctrlDt.update)
    router.post('/search', ctrlDt.search)
    router.get('/:_id', ctrlDt.findById)
    router.delete('/:_id', ctrlDt.remove)



module.exports = router