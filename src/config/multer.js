const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename: (req, file, callBack) => {
            crypto.randomBytes(16, (error, hash) => {
                if(error) callBack(error);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                callBack(null, fileName);
            });
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, callBack) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if(allowedMimes.includes(file.mimetype)){
            callBack(null, true);
        }else{
            callBack(new Error('Invalid file type.'))
        };
    },
}