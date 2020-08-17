const mongoose = require('mongoose');
const medalModel = require('../models/medalModel');
const ratingModel = require('../models/ratingModel');

const getMedals = async () => {
    const findAllMedals = await medalModel.find({});

    global.data = findAllMedals;
};

const setRating = async (rating, medalId, type) => {
    const medal = await medalModel.find({ _id: medalId });
    if (type === 'set') {
        await medalModel.updateOne(
            { _id: medalId },
            {
                goodRating:
                    rating === 'good'
                        ? medal[0].goodRating + 1
                        : medal[0].goodRating,
                badRating:
                    rating === 'bad'
                        ? medal[0].badRating + 1
                        : medal[0].badRating,
            },
            (err) => {
                if (err) {
                    return console.log(err);
                }

                getMedals();
            },
        );
    } else if (type === 'change') {
        await medalModel.updateOne(
            { _id: medalId },
            {
                goodRating:
                    rating === 'good'
                        ? medal[0].goodRating + 1
                        : medal[0].goodRating - 1,
                badRating:
                    rating === 'bad'
                        ? medal[0].badRating + 1
                        : medal[0].badRating - 1,
            },
            (err) => {
                if (err) {
                    return console.log(err);
                }

                getMedals();
            },
        );
    }
};

exports.getAllMedals = async () => {
    getMedals();
};

exports.addRating = async (message, rating, medalId, userId) => {
    const findRating = await ratingModel.find({ rating, medalId, userId });

    if (findRating.length > 0) {
        return console.log('validation error');
    }

    const findOtherRating = await ratingModel.find({ medalId, userId });

    if (findOtherRating.length > 0) {
        ratingModel.updateOne(
            { medalId, userId },
            {
                rating,
            },
            async (err) => {
                if (err) {
                    return console.log(err);
                }

                setRating(rating, medalId, 'change');
            },
        );
    } else {
        ratingModel.create(
            {
                _id: mongoose.Types.ObjectId(),
                rating,
                medalId,
                userId,
            },
            async (err) => {
                if (err) {
                    return console.log(err);
                }

                setRating(rating, medalId, 'set');
            },
        );
    }
};
