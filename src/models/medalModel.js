const mongoose = require('mongoose');
const Schelma = mongoose.Schema;

const medalModel = new Schelma({
    _id: { type: mongoose.ObjectId, required: true },
    title: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    goodRating: { type: Number, required: true },
    badRating: { type: Number, required: true },
    index: { type: Number, required: true },
});

module.exports = mongoose.model('medals', medalModel);
