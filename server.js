'use strict';
const express = require('express');
const socket_io = require( "socket.io" );

const app = express();
const port = process.env.PORT || 4000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.set('views', './views');

/* Middleware */
app.use(express.static('public'));

/* Routes */
app.get('/', function(req,res){
  res.render('index');
});

/* Socket.io */

/* Middleware */
io.use(function(socket, next){
  console.log('MIDDLEWARE socket = ' + socket.client);
  console.log(socket.client.request);
  next();
});
io.sockets.on('connection', function(socket){
  console.log('socket connection');
  require('./server/socket')(socket, io);
});

http.listen(port, function(error){
    if(error) console.log(error);
  console.log(`App listening on port ${port}`);
});

/*
app.listen(port, function(error){
  console.log(`App listening on port ${port}`)
});
*/
