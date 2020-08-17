const mongoose = require('mongoose');
const Schelma = mongoose.Schema;

const ratingModel = new Schelma({
    _id: { type: mongoose.ObjectId, required: true },
    rating: { type: String, required: true },
    medalId: { type: String, required: true },
    userId: { type: String, required: true },
});

module.exports = mongoose.model('ratings', ratingModel);
