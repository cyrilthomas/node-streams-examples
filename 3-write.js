var fs = require('fs')
  , readStream
  , writeStream;

readStream = fs.createReadStream('3-write.js', { encoding: 'utf8' });

// create a writable stream to a file
writeStream = fs.createWriteStream('3-write-copy.js', { encoding: 'utf8' });

// open readable stream to copy
readStream.on('readable', function() {
  var data;

  // read from input stream
  while (data = this.read()) {
    writeStream.write(data); // write to writable stream

    console.log('writing data: %d', data.length);
  } 
});

// end the writable stream
readStream.on('end', function() {
  writeStream.end(); 
  console.log('finished writing to stream');
});
