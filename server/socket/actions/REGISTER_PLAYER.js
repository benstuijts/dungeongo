'use strict';
/*
module.exports = function(data, callback) {
  console.log(io.sockets.playersOnline);
  callback({
    error: false,
    response: ''
  });
};
*/
module.exports = function(socket, playersOnline) {
  return function(request, callback) {
    console.log('Action: REGISTER_PLAYER')
    let player = {
      name: request.player.name,
      _id: request.player._id
    };

    if(!request.player) {
      socket.emit("MESSAGE", "Cannot connect to the game.");
      return false;
    } else {
      playersOnline[socket.id] = player;
      socket.consolePlayersOnline();
      callback({
        error: false,
        message: "Welcome to the game!"
      });
    }
  }

}
