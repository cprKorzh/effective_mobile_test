const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('Shops', {
        shop_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        shop_name: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'shops'
    });
};