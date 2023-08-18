const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct);
router.get('/products/:id', productController.findProductById);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get('/video/:videoId', productController.getProductsByVideoId);

module.exports = router;