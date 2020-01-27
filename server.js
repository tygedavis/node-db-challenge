const express = require('express');
const projRouter = require('./routes/project-router');
const server = express();

server.use(express.json());

server.use('/', projRouter);
server.use('.docs', express.static('./docs'))

module.exports = server;