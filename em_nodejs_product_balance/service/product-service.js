const db = require('../database');
const ApiError = require('../exceptions/api-errors');
const ProductDto = require('../dtos/product-dto');
const { Op } = require('sequelize');

class ProductService {
    async create(plu, productName){
        const already = await db.Products.findOne({
           where: { product_plu: plu }
        });

        if (already) {
            throw ApiError.BadRequest(`A product with the same PLU '${plu}' already exists`);
        }

        const product = await db.Products.create({
            product_plu: plu,
            product_name: productName
        });

        //add post req for history service

        return { message: 'Product has been created successfully' };
    }

    async get(name, plu) {
        if (!name && !plu) {
            throw ApiError.BadRequest('At least one filter (name or plu) must be provided');
        }

        const conditions = {};

        if (name) {
            conditions.product_name = { [Op.iLike]: `%${name}%` }; // Case-insensitive search
        }
        if (plu) {
            conditions.product_plu = plu;
        }

        const product = await db.Products.findAll({ where: conditions });
        const productDto = product.map(product => new ProductDto(product));

        //add post req for history service

        return { product: productDto };
    }
}

module.exports = new ProductService();