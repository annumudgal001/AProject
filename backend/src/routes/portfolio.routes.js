const express = require('express');

const {
    createPortfolio,
    getPortfolio
} = require('../controllers/portfolio.controller');

const router = express.Router();

router.post('/', createPortfolio);

router.get('/', getPortfolio);

module.exports = router;