const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer.js');

routes.post('/posts',multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);
    res.json({ Hello: 'world' });
});

module.exports = routes;