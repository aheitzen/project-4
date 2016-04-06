var mongoose = require('mongoose');

var HikeSchema = new mongoose.Schema({
  // title: String,
  // description: String,
  // image: String

});

module.exports = mongoose.model('Hike', HikeSchema);
