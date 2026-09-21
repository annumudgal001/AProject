const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        title: {
            type: String,
            required: true,
            trim: true
        },

        about: {
            type: String,
            required: true,
            trim: true
        },

        skills: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Portfolio', portfolioSchema);