const Dungeon = require("./models/Dungeon");
const utils = require("../../own_modules/utils");
const dungeon_list = {};
'use strict';
module.exports = function(io) {
  io.on('connection', function(socket) {
    //Globals
  //var defaultRoom = 'general';
  //var rooms = ["General", "angular", "socket.io", "express", "node", "mongo", "PHP", "laravel"];

  //Emit the rooms array
  //socket.emit('setup', {
  //  rooms: rooms
  //});


  //Listens for new user
  socket.on('new user', function(data) {
    //data.room = defaultRoom;
    let defaultRoom = data.room;
    //New user joins the default room
    socket.join(defaultRoom);
    //Tell all those in the room that a new user joined
    io.in(defaultRoom).emit('user joined', data);
  });

  //Listens for switch room
  socket.on('switch room', function(data) {
    //Handles joining and leaving rooms
    //console.log(data);
    socket.leave(data.oldRoom);
    socket.join(data.newRoom);
    io.in(data.oldRoom).emit('user left', data);
    io.in(data.newRoom).emit('user joined', data);

  });

  socket.on('enter dungeon', function(data){
    let room = data.room;
    socket.join(room);
    io.in(room).emit('user joined', data);
  });

  socket.on('ENTER_DUNGEON', (data) => {
    let _room = data.dungeon.id;

    if(dungeon_list[data.dungeon.id]) {

    } else {
      let _dungeon = new Dungeon(data.dungeon.name, data.dungeon.id, socket.id);
      dungeon_list[data.dungeon.id] = _dungeon;
    }
    dungeon_list[data.dungeon.id].addPerson(socket.id);

    socket.join(_room);
    io.in(_room).emit('user joined', data);
  });

  socket.on('disconnect', function() {
    console.log('socket ' + socket.id + ' disconnected...' );
    for(let id in dungeon_list) {
      dungeon_list[id].removePerson(socket.id);
      io.in(id).emit('user left', {player: {name: "the other player"}});
    }

  });

  });

  return io;
}
