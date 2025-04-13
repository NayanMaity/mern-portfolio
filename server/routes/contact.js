const express = require('express');
const router = express.Router();
const contact = require('../data/contact');

router.get('/', (req, res) => {
    res.json(contact);
});

module.exports = router;
