var inherit = require('util').inherits
  , Readable = require('stream').Readable
  , alpha;

// extend a Readable instance
inherit(AlphabetStream, Readable);

function AlphabetStream(opts) {
  Readable.call(this, opts);

  // keep internal character position
  this._pos = 0;
  
  // alphabet data buffer
  this._src = new Buffer("abcdefghijklmnopqrstuvwxyz\n", 'utf8');
}

AlphabetStream.prototype._read = function(size) {
  var data;

  // check we haven't exhausted the data
  if (this._pos >= this._src.length) {
    this.push(null); // no more data, end the read
  }

  // copy data chunk
  data = this._src.slice(this._pos, this._pos + size);

  this._pos += data.length; // increase internal position
  this.push(data); // push data chunk
};

// using the read stream
alpha = new AlphabetStream(); 
alpha.pipe(process.stdout);
