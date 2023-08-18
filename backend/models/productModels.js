const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  name: String,
  price: Number,
  imageUrl: String,
});

module.exports = mongoose.model('Product', productSchema);