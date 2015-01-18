var fs = require('fs')
  , readStream
  , writeStream;

readStream = fs.createReadStream('4-write-pipe.js', { encoding: 'utf8' });
writeStream = fs.createWriteStream('4-write-pipe-copy.js', { encoding: 'utf8' });

// listen for pipe
writeStream.on('pipe', function() {
  console.log('piping from readable stream');
});

// write has finsihed
writeStream.on('finish', function() {
  console.log('finished writing to stream');
});

// pipe (read => write) stream
readStream.pipe(writeStream); 
