const express = require('express');
const helmet = require('helmet');

const carRoute = require('../routes/carRoute.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/carRoute', carRoute );

server.get('/', (req, res) => {
    console.log(`**test get request is working`);
})

module.exports = server;
