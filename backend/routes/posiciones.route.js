const express = require('express'),
    router = express.Router(),
    ctrlPosiciones = require('../controller/posiciones.controller')


    router.get('/', ctrlPosiciones.get)
  



    module.exports = router