const {Router} = require('express'),
    router = Router()


router.use('/jugador', require('../routes/jugador.route'))
router.use('/equipo', require('../routes/equipo.route'))
router.use('/dt', require('../routes/dt.route'))
router.use('/posiciones', require('../routes/posiciones.route'))
router.use('/partido', require('../routes/partido.route'))
router.use('/detalles', require('../routes/detalle.partido.route'))




module.exports = router