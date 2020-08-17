const sendMessage = require('../utils/sendMessage');

module.exports = (message) => {
    sendMessage(message, 'Help', 'correct', 'All commands list:', null, [
        {
            name: `${prefix}medals`,
            value: 'Show all medals',
        },
        {
            name: `${prefix}author`,
            value: 'Bot author',
        },
    ]);
};
