'use strict';
const express = require('express');
const socket_io = require( "socket.io" );
const utls = require('./own_modules/utils');

const app = express();
const port = process.env.PORT || 4000;
var server   = require('http').Server(app);
var io       = require('socket.io')(server);

app.set('view engine', 'ejs');
app.set('views', './views');

/* Middleware */
app.use(express.static('public'));

/* Routes */
app.get('/', function(req,res){
  res.render('index');
});

/* Socket.io */

require('./server/socket')(io);

server.listen(2015);
console.log('It\'s going down in 2015');
