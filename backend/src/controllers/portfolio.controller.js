const Portfolio = require('../models/portfolio.model');

const createPortfolio = async (req, res) => {
    try {
        const { name, title, about, skills } = req.body;

        if (!name || !title || !about) {
            return res.status(400).json({
                success: false,
                message: 'Name, title and about are required'
            });
        }

        const portfolio = await Portfolio.create({
            name,
            title,
            about,
            skills
        });

        res.status(201).json({
            success: true,
            message: 'Portfolio saved successfully',
            data: portfolio
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: 'Failed to save portfolio'
        });
    }
};

const getPortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.find();

        res.status(200).json({
            success: true,
            data: portfolio
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: 'Failed to fetch portfolio'
        });
    }
};

module.exports = {
    createPortfolio,
    getPortfolio
};