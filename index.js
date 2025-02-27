const express = require('express');
const helmet = require('helmet');

const dishesRouter = require('./dishRoute/dishes-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api', dishesRouter)

server.get('/', (req, res) => {
    res.send('Hello')
})

const port = 4200;

server.listen(port, function() {
    console.log(`\n *** Service is running on localhost:${port} *** \n`)
})