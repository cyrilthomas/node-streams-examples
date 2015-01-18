var fs = require('fs')
  , readStream;

// create a read stream from file
readStream = fs.createReadStream('1-read-flowing.js', { encoding: 'utf8' });

// read the data
readStream.on('data', function(data) {
  console.log('reading data: %d', data.length);
});

// reading has finished
readStream.on('end', function() {
  console.log('data has finished streaming.');
});
