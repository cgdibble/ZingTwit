// need to access the mongoose module

var mongoose = require('mongoose');

// define the user model in the DataBase!!
module.exports = mongoose.model('User', {
  hashtag : { type : String, default : '' },
  count : { type : Number, default : 0}
})