var net = require('net')
  , google ='74.125.25.94'
  , socket;

// open tcp socket
socket = new net.Socket();

// read from socket stream
socket.on('data', function(data) {
  console.log('read data: %d', data.length);
});

// finished!
socket.on('end', function() {
  console.log('duplex stream finished');
});

// open network connection
socket.connect(80, google, function() {
  // write to the socket stream
  this.write("GET / HTTP/1.0\r\n\r\n");

  console.log('writing request to socket...');
});
