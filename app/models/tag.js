// need to access the mongoose module

var mongoose = require('mongoose');

// define the user model in the DataBase!!
module.exports = mongoose.model('Tag', {
  hashtag : { type : String, default : '' },
  count : { type : Integer, default : 0}
})