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
  console.log("NEW_GAME action");
  return function(request, callback) {
    callback("hello");
  }
}
