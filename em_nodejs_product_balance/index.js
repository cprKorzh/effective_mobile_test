require('dotenv').config({ path: '../.env' });
const express = require('express');
const database = require('./database');
const router = require('./router');

const app = express();
const port = process.env.BALANCE_PORT || 5000;

app.use(express.json());
app.use('/api', router);

const start = async () => {
    await database.sequelize.sync( { alter: true }).then(result=>{
        console.log("Database synchronized successfully.");
        app.listen(port, () => { console.log(`Server is started on ${port} port`); });
    })
    .catch(err => console.log(err));
};

start();