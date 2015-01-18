var inherit = require('util').inherits
  , Transform = require('stream').Transform;

// extend Transform
inherit(CapsTransform, Transform);

function CapsTransform(opts) {
  Transform.call(this, opts); 
}

CapsTransform.prototype._transform = function(data, enc, cb) {
  var data = new Buffer(data.toString().toUpperCase(), 'utf8');
  
  // send data to the Read stream
  cb(null, data);
};

// using a transform duplex stream
process.stdin
  .pipe(new CapsTransform())
  .pipe(process.stdout);
