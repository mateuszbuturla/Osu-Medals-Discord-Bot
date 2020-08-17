const sendMessage = require('../utils/sendMessage');

module.exports = (message) => {
    sendMessage(message, 'Help', 'correct', 'All commands list:', null, [
        {
            name: `${prefix}medals`,
            value: 'Show all medals',
        },
        {
            name: `${prefix}medal (medal name)`,
            value: 'Show hint how to get medal',
        },
        {
            name: `${prefix}author`,
            value: 'Bot author',
        },
    ]);
};
