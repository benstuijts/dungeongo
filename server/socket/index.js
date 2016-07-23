/* ./server/socket/index.js */

const fs = require('fs');
const colors = require('colors');
const utils = require('../../own_modules/utils');
const Room = require('./models/Room');

const socket_list = {};

const dungeons = ["random12345", "random56789", "master12345"];

const playersOnline = {};

'use strict';
module.exports = function(socket, io) {

  socket.consolePlayersOnline = function() {
    console.log('Players online: ' + Object.keys(playersOnline).length);
    console.log(playersOnline);
  }

  

    socket.consolePlayersOnline();

    socket.on('connection', function(){
      console.log('socket connected');
    });

    socket.on('disconnect', function(){
      console.log('user disconnected: ' + socket.id);
      delete playersOnline[socket.id];
      socket.consolePlayersOnline();
    });

    loadAllActions({ exceptions: ['_template'] });


    socket.on("TEST",  function(data) {
      console.log('test action' + data);
    });

    function loadAction(actionName) {
      return socket.on(actionName, require('./actions/' + actionName + '.js')(socket, playersOnline));
    }

    function loadAllActions(options) {
      let except = options.exceptions || ""
      fs.readdir('./server/socket/actions', function(error, dir){
        dir.forEach(function(action){
          let actionName = action.split(".")[0];
          if(actionName=='temp') return;
          if(typeof except === 'string') {
            if(except === actionName) return;
          }
          if(typeof except === 'object') {
            if(except.indexOf(actionName) > -1) return;
          }
          loadAction(actionName);
        });
      });
    }

    return socket;
};
