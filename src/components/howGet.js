const sendMessage = require('../utils/sendMessage');

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

    const medal = data.filter((element) => element.title === medalName);

    if (medal.length === 0) {
        return sendMessage(
            message,
            'Incorrect medal name',
            'error',
            `This medal does not exist. Type ${prefix}medals to get all medals list.`,
        );
    }

    sendMessage(
        message,
        medal[0].title,
        'correct',
        medal[0].description,
        null,
        null,
        null,
        medal[0].img,
    );
};
