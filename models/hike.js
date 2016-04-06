var mongoose = require('mongoose');

var HikeSchema = new mongoose.Schema({
  name: String,
  description: String,
  directions: String,
  userId: String

});

module.exports = mongoose.model('Hike', HikeSchema);
