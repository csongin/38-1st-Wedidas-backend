const productRouter = require('express').Router();
const productController = require('../controllers/productController');

productRouter.get('/:gender', productController.getProductsByGender);
productRouter.get('/detail/:productId', productController.getProductDetails);

module.exports = productRouter;