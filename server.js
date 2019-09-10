const express = require('express');
const helmet = require('helmet');

const carRoute = require('./routes/carRoute');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/car-route', carRoute );

// test get 
server.get('/', (req, res) => {
    res.send('testing server is working')
})

module.exports = server;
