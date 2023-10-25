const config = require('../backend/config/config')
    express = require('express'),
    app = express()
    cors = require('cors'),
    bodyParser = require('body-parser')
    http = require('http').Server(app)
    db = require('./database/database')
    consumer = require('./io/consumer')
    methodOverride = require('method-override')
    io = require("socket.io")(http,{
        cors:{
            origins:['http://localhost:4200']
        }
    })
    
    
//const { createPosiciones } = require('./init/posiciones')
consumer.start(io)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(methodOverride('_method'))
app.use("/api", require('../backend/routes/'))


//pos = createPosiciones()




http.listen(config.port, () => {
    console.log(`Server is running in port ${config.port}`);
});