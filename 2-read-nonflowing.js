var fs = require('fs')
  , readStream;

// create read stream from file
readStream = fs.createReadStream('2-read-nonflowing.js', { encoding: 'utf8' });

// start reading from the stream
readStream.on('readable', function() {
  var data;

  // read the data
  while (data = this.read()) {
    console.log('reading data: %d', data.length);
  } 
});

readStream.on('end', function() { 
  // reading has finished
  console.log('data finished streaming.');
});
