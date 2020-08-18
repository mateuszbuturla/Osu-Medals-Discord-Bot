const sendMessage = require('../utils/sendMessage');
const { addRating } = require('../controllers/medalController');

module.exports = (message, args) => {
    if (args.length === 0) {
        return sendMessage(
            message,
            'Incorrect medal name',
            'error',
            `This medal does not exist. Type ${prefix}medals to get all medals list.`,
        );
    }

    const medalName = args.join(' ');

    const medal = data.filter(
        (element) => element.title.toLowerCase() === medalName.toLowerCase(),
    );

    if (medal.length === 0) {
        return sendMessage(
            message,
            'Incorrect medal name',
            'error',
            `This medal does not exist. Type ${prefix}medals to get all medals list.`,
        );
    }

    const thenFunction = (msg) => {
        msg.react('👎');
        msg.react('👍');

        const badFilter = (reaction, user) =>
            reaction.emoji.name === '👎' && user.id === message.author.id;
        const goodFilter = (reaction, user) =>
            reaction.emoji.name === '👍' && user.id === message.author.id;

        const bad = msg.createReactionCollector(badFilter, {
            time: 60000,
        });
        const good = msg.createReactionCollector(goodFilter, {
            time: 60000,
        });

        bad.on('collect', (r, u) => {
            r.users.remove(
                r.users.cache.filter((u) => u === message.author).first(),
            );
            addRating(message, 'bad', medal[0]._id, message.author.id);
        });

        good.on('collect', (r, u) => {
            r.users.remove(
                r.users.cache.filter((u) => u === message.author).first(),
            );
            addRating(message, 'good', medal[0]._id, message.author.id);
        });
    };

    sendMessage(
        message,
        medal[0].title,
        'correct',
        `${medal[0].description} \n \n 👍: ${medal[0].goodRating} | 👎: ${medal[0].badRating}`,
        null,
        null,
        thenFunction,
        medal[0].img,
    );
};
