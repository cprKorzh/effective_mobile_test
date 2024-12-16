require('dotenv').config({ path: '../.env' });
const { Sequelize } = require('sequelize');

let sequelize = new Sequelize(
    process.env.BALANCE_DB_NAME,
    process.env.BALANCE_DB_USER,
    process.env.BALANCE_DB_PASSWORD, {
        host: process.env.BALANCE_DB_HOST,
        dialect: 'postgres',
        port: process.env.BALANCE_DB_PORT,
        logging: false
    }
);

const models = require('./models')(sequelize);

module.exports = {
    sequelize,
    ...models
} // exporting models with sequelize connection