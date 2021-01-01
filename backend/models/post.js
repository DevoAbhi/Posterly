const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { title: String, required: true},
  content: { title: String, required: true}
});

module.exports = mongoose.model('Post', postSchema);
