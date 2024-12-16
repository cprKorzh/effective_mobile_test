const Products = require('./Products');
const Stocks = require('./Stocks');
const Shops = require('./Shops');

module.exports = (sequelize) => {
    return {
        Products: Products(sequelize),
        Stocks: Stocks(sequelize),
        Shops: Shops(sequelize)
    };
};  // exporting object with models
    // you can add some essences(models) in this objects