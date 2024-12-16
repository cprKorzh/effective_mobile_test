const Router = require('express').Router;
const router = new Router();
const productController = require('../controllers/product-controller');
const stockController = require('../controllers/stock-controller');

router.post('/create-product', productController.create);
router.get('/gain-product', productController.get);

router.post('/create-stock', stockController.create);
router.put('/increase-stock', stockController.increase);
router.put('/decrease-stock', stockController.decrease);
router.get('/get-stocks', stockController.get);

module.exports = router;