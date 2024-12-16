const Sequelize = require('sequelize');
const Products = require('./Products');
const Shops = require('./Shops');

module.exports = function (sequelize) {
    return sequelize.define('Stocks', {
        stock_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        stock_product_plu: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Products(sequelize),
                key: 'product_plu'
            }
        },
        stock_shop_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Shops(sequelize),
                key: 'shop_id'
            }
        },
        stock_quantity_shop: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0,
            validate: {
                min: {
                    args: [0],
                    msg: 'The quantity of items in stock shop cannot be less than 0'
                }
            }
        },
        stock_quantity_order: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0,
            validate: {
                min: {
                    args: [0],
                    msg: 'The quantity of items in stock order cannot be less than 0'
                }
            }
        }
    }, {
        timestamps: false,
        tableName: 'stocks'
    });
};