const express = require('express');
const multer = require('multer');
const router = express.Router()
const { transport } = require('../nodemailer/autogenerateMail')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('img'), (req, res) => {
    const data = req.body.name
    const email = req.body.email
    console.log(data)
    console.log(req.body);
    console.log(req.file);
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.send('Blog created successfully');
    const mailoption = {
        from: `BLOG Site <burhan.ahmed60090@gmail.com>`,
        to: email,
        subject: 'Your Blog Has been Published',
        text: 'Your Blog Has been Published. Congratulations'
    }
});

module.exports = router