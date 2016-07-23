'use strict';
module.exports = function(data, callback) {
  console.log('do something with the data ' + data.name );
  callback({
    error: false,
    response: 'response from NEW_GAME socket'
  });
}
