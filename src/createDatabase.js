require('dotenv').config();

const mongoose = require('mongoose');
const medalModel = require('./models/medalModel');
const dataFile = require('./data/data');

mongoose.connect(process.env.DB_KEY, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the database');
});
db.on('error', (err) => console.log('Error ' + err));

dataFile.map(async (el, index) => {
    await medalModel.create(
        {
            _id: mongoose.Types.ObjectId(),
            index: index,
            title: el.title,
            img: el.img,
            category: el.category,
            description: el.description,
            goodRating: 0,
            badRating: 0,
        },
        (err) => {
            if (err) {
                return console.log(err);
            }
            console.log(`done ${index}/${dataFile.length}`);
        },
    );
});
