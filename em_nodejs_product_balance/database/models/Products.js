const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('Products', {
        product_plu: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        product_name: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'products'
    });
};