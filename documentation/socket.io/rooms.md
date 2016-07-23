Summary
There are some ways to send a message from the server to the client with Socket.io, Let's explore some of them:

socket.emit - Fire event to the client side which associated to this socket.
socket.emit('eventName', { data: 'tosend' });

socket.broadcast.emit - Like the socket.emit, firing an event to the client but instead of firing the event to the associated socket, the event will be fired in all other connected socket except from the broadcasting one.
socket.broadcast.emit('eventName', { data: 'tosend'});

socket.broadcast.to('roomName').emit - Sometimes we want to broadcast from one socket to all another socket in the same room rather than all the sockets in the server, in this way we can broadcast to all other sockets who joined a specific room
socket.broadcast.to('roomName').emit('eventName', {data: 'tosend'});

io.sockets.emit - In this way we can fire an event to all the clients that connected to the server.
io.sockets.emit('eventName', { data: 'tosend'});

io.of('/namespaceName').emit - Like rooms, in socket.io we can create namespaces, if you want to emit an event to all the clients that connected to a namespace, this is the way.
io.of('/namespaceName').emit('eventName', { data: 'tosend'});
