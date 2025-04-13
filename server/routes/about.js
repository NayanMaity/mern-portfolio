const express = require('express');
const router = express.Router();
const about = require('../data/about');

router.get('/', (req, res) => {
    res.json(about);
});

module.exports = router;
