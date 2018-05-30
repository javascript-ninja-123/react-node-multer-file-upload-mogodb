const express = require('express');

const app = express();

//database
require('./database');

//middleware
require('./config/middleware')(app);

//routers
require('./routes')(app);


app.listen(5000, () => console.log('listening'))
