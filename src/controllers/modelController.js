require('dotenv').config();

const mongoose = require('mongoose');
const medalController = require('../models/medalModel');

exports.getAllMedals = async () => {
    mongoose.connect(process.env.DB_KEY, { useNewUrlParser: true });
    const db = mongoose.connection;

    db.once('open', () => {
        console.log('Connected to the database');
    });
    db.on('error', (err) => console.log('Error ' + err));

    const findAllMedals = await medalController.find({});

    global.data = findAllMedals;

    db.close();
};
