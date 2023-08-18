const Product = require('../models/productModels');

exports.createProduct = async (req, res) => {
  const { videoId, name, price, imageUrl } = req.body;
  try {
    const newProduct = new Product({ videoId, name, price, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.findProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, price },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndRemove(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductsByVideoId = async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const products = await Product.find({ videoId });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};