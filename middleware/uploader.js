const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'images/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const uploader = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const supportedFormat = /png|jpg|jpeg|pdf/;
    const extension = path.extname(file.originalname);

    if (supportedFormat.test(extension)) {
      cb(null, true);
    } else {
      cb(new Error('File format must be jpg/png/jpeg'));
    }
  },
  limits: {
    fileSize: 10000000,
  },
});

module.exports = uploader;
