const stockService = require('../service/stock-service');

class StockController {
    async create(req, res) {
        try {
            const { plu, storeId, quantityShop, quantityStock } = req.body;
            const stockData = await stockService.create(plu, storeId, quantityShop, quantityStock);
            res.status(201).json(stockData);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    async increase(req, res) {
        try {
            const { stockId, quantity, place } = req.body;
            const stockData = await stockService.increase(stockId, quantity, place);
            res.status(200).json(stockData);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    async decrease(req, res) {
        try {
            const { stockId, quantity, place } = req.body;
            const stockData = await stockService.decrease(stockId, quantity, place);
            res.status(200).json(stockData);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    async get(req, res) {
        try {
            const { plu, storeId, quantityMin, quantityMax, orderQuantityMin, orderQuantityMax } = req.query;
            const stocks = await stockService.get({ plu, storeId, quantityMin, quantityMax, orderQuantityMin, orderQuantityMax });
            res.status(200).json(stocks);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }
}

module.exports = new StockController();
