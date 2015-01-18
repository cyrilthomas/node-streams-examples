var inherit = require('util').inherits
  , Writable = require('stream').Writable;

// extend a Writable instance
inherit(CapsStream, Writable);

function CapsStream(opts) {
  Writable.call(this, opts);

  // where we are to write to
  this._dest = '';
}

CapsStream.prototype._write = function(data, enc, cb) {
  // upper case data
  this._dest += data.toString().toUpperCase(); 
  
  // finish the write
  cb();
};

// using the write stream 
var caps = new CapsStream();

caps.on('finish', function() {
  console.log(this._dest);
});

caps.write(new Buffer('hello sydney!', 'utf8'));
caps.end();
