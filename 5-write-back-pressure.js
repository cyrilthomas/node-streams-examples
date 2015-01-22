var fs = require('fs')
  , file = fs.readFileSync('linux.tar.xz') // ssshhhh!!! say nothing.
  , writeStream = fs.createWriteStream('linux-copy.tar.xz')
  , size = 524288 // 512kb
  , written = 0;

// start the copy
copy();

function copy() {
  var ready = true
    , data;

  // iterate over the sliced data
  do {
    data = file.slice(written, written + size);
    ready = writeStream.write(data);
    written += data.length;

    console.log('%d/%d', written, file.length);
  } while (written < file.length && ready);

  // did we write all the data?
  if (written < file.length) {
    console.log('waiting for drain...');

    // allow the write stream to drain its data buffer
    // and start copy where we left off
    writeStream.once('drain', copy); 
  }
}
