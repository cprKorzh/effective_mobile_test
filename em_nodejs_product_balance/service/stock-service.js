const db = require('../database');
const ApiError = require('../exceptions/api-errors');
const { Op } = require('sequelize');

class StockService {
    async create(plu, storeId, quantityShop, quantityStock) {
        const productExists = await db.Products.findOne({
            where: { product_plu: plu }
        });
        if (!productExists) {
            throw ApiError.BadRequest(`Product with the given PLU '${plu}' does not exist.`);
        }

        const shopExists = await db.Shops.findOne({
            where: { shop_id: storeId }
        });
        if (!shopExists) {
            throw ApiError.BadRequest(`Shop with the '${storeId}' ID does not exist.`);
        }

        const newStock = await db.Stocks.create({
            stock_product_plu: plu,
            stock_shop_id: storeId,
            stock_quantity_shop: quantityShop || 0,
            stock_quantity_order: quantityStock || 0
        });

        //add post req for history service

        return { message: 'Stock has been created successfully' };
    }

    async increase(stockId, quantity, place) {
        if (place !== "shop" && place !== "order") {
            throw ApiError.BadRequest(`Request must have 'shop' or 'order'`);
        }

        const stock = await db.Stocks.findOne({
            where: { stock_id: stockId }
        });
        if (!stock) {
            throw ApiError.BadRequest(`Stock with the '${stockId}' ID does not exist.`);
        }

        place === "shop" ? stock.stock_quantity_shop += quantity : stock.stock_quantity_order += quantity
        stock.save();

        //add post req for history service

        return { message: 'Stock has been increased' };
    }

    async decrease(stockId, quantity, place) {
        if (place !== "shop" && place !== "order") {
            throw ApiError.BadRequest(`Request must have 'shop' or 'order'`);
        }

        const stock = await db.Stocks.findOne({
            where: { stock_id: stockId }
        });
        if (!stock) {
            throw ApiError.BadRequest(`Stock with the '${stockId}' ID does not exist.`);
        }

        const field = place === "shop" ? "stock_quantity_shop" : "stock_quantity_order";

        if (stock[field] < quantity) {
            throw ApiError.BadRequest(`Not enough stock in ${place} to decrease by ${quantity}. Current stock: ${stock[field]}`);
        }

        stock[field] -= quantity;

        stock.save();

        //add post req for history service

        return { message: 'Stock has been decreased' };
    }

    async get(filters) {
        const { plu, storeId, quantityMin, quantityMax, orderQuantityMin, orderQuantityMax } = filters;
        const conditions = {};

        // PLU
        if (plu) {
            conditions.stock_product_plu = plu;
        }

        // Shop ID
        if (storeId) {
            conditions.stock_shop_id = storeId;
        }

        // Quantity in shop
        if (quantityMin || quantityMax) {
            conditions.stock_quantity_shop = {
                ...(quantityMin ? { [Op.gte]: quantityMin } : {}),
                ...(quantityMax ? { [Op.lte]: quantityMax } : {})
            };
        }

        // Quantity in order
        if (orderQuantityMin || orderQuantityMax) {
            conditions.stock_quantity_order = {
                ...(orderQuantityMin ? { [Op.gte]: orderQuantityMin } : {}),
                ...(orderQuantityMax ? { [Op.lte]: orderQuantityMax } : {})
            };
        }

        // Req with filters
        const stocks = await db.Stocks.findAll({
            where: conditions
        });

        return stocks;
    }
}

module.exports = new StockService();