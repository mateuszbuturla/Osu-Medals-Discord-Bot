const sendMessage = require('../utils/sendMessage');

module.exports = (message) => {
    sendMessage(
        message,
        'All medals',
        'correct',
        'All medals in Osu standard mode',
        data.map((medal) => {
            return {
                name: medal.title,
                value: medal.description,
            };
        }),
    );
};
