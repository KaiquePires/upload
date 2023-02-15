const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer.js');
const Post = require('./models/Post.js');



routes.post('/posts',multer(multerConfig).single('file'), async (req, res) => {
    const {originalname: name, size, filename: key, url} = req.file;
    console.log(req.file)
    const post = ''
    res.json(post);
});

module.exports = routes;