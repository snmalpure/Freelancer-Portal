const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let freelance_proj = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model('freelance_proj', freelance_proj);
