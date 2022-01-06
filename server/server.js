const express = require('express');
const path = require('path');

const server = express();

const commentRoutes = require('./routes/comments');

server.use(express.json());

server.use(express.static(path.join(__dirname, 'public')));

server.use('/comments', commentRoutes);

// server.use('/', (req, res) => {
//   res.send('hello');
// })

module.exports = server;  