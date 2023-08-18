const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  thumbnailUrl: String,
  youtubeUrl: String,
});

module.exports = mongoose.model('Video', videoSchema);