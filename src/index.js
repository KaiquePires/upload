const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

mongoose.connect('mongodb://localhost:27017/upload-db', {
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes.js'))

app.listen(3000);
