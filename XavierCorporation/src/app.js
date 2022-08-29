const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://laurafiap:YS2X5wap7sD7yzP@cluster0.wlvu8ox.mongodb.net/xavier-corporation');
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//models
require('./models/product.js');

//rota
const productRouter = require('./routes/product-route.js');
const index = require('./routes/index.js');
app.use('/products', productRouter);
app.use('/', index);
module.exports = app;


