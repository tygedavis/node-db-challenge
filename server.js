const express = require('express');
const projRouter = require('./routes/project-router');
const server = express();

server.use(express.json());

server.use('/', projRouter);

module.exports = server;