'use strict';
const Room = require('../models/Room');
const socket_list = {};
const active_dungeon_list = {};

module.exports = function(socket, io) {
  socket.id = randomString(32);
  console.log('connected to ' + socket.id);
  socket_list[socket.id] = socket;

  socket.on("disconnect", function(){
    console.log('disconnect ' + socket.id);
    delete socket_list[socket.id];
    if(socket.activeDungeon) {
      active_dungeon_list[socket.activeDungeon].removePerson(socket.id);
    }

  });

  socket.emit("MESSAGE", "test message");

  socket.on("ENTER_DUNGEON", function(room){
    socket.join(room);
    socket.emit("MESSAGE", "you clicked on entering dungeon");
    io.sockets.in(room).emit('MESSAGE', 'what is going on, party people?');
  });

/*
  socket.on("ENTER_DUNGEON", function(data, callback){
    let player = data.player,
        dungeon = data.dungeon,
        connectionId = data.id;
    console.log(data);
    // check id connectionId is valid
    //console.log(`connectionID = ${connectionId} and socketID = ${socket.id}`);

    //if(connectionId !== socket.id) {
    //  callback({error: "Request from an invalid connection"});
    //}

    // check if player exists and have logged in.

    // check if dungeon exists and the maximum of players has not been reached.
    if(active_dungeon_list[dungeon.id]) {
      console.log('extra player enters the dungeon');
      active_dungeon_list[dungeon.id].addPerson(socket.id);
      socket.activeDungeon = dungeon.id;
      socket.emit("MESSAGE", 'You ALSO entered the dungeon , now there are ' + active_dungeon_list[dungeon.id].getNumberOfPersonsInRoom() + ' players in this dungeon.');
      socket.join(dungeon.id);
      io.sockets.in(dungeon.id).emit("MESSAGE", "message to all sockets in the room");

      callback({ message: 'You ALSO entered the dungeon , now there are ' + active_dungeon_list[dungeon.id].getNumberOfPersonsInRoom() + ' players in this dungeon.'});
    } else {
      console.log('first player enters the dungeon');
      let room = new Room("Random Dungeon 1", dungeon.id, socket.id);
      room.addPerson(socket.id);
      active_dungeon_list[dungeon.id] = room;
      socket.activeDungeon = dungeon.id;
      socket.join(dungeon.id);

      socket.emit("MESSAGE", "Entering the dungeon...");

      callback({ message: 'You entered the dungeon'});
    }



  });
*/

}
const randomStringMemory = [];
function randomString(len) {
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", text="";
  for( var i=0; i < len; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  if(randomStringMemory.indexOf(text) > -1 ) {
      this.randomString(len);
  } else {
      randomStringMemory.push(text);
      return text;
  }
};
