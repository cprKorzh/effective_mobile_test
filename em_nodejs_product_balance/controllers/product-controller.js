const productService = require('../service/product-service');

class ProductController {
    async create(req, res){
        try {
            const { plu, productName } = req.body;
            const productData = await productService.create(plu, productName);
            res.status(201).json(productData);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    async get(req, res) {
        try {
            const { name, plu } = req.query;
            const products = await productService.get(name, plu);
            res.status(200).json(products);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }
}

module.exports = new ProductController();