const sendMessage = require('../utils/sendMessage');

module.exports = (message) => {
    sendMessage(message, 'Help', 'correct', 'All commands list:', {
        name: `${prefix}medals`,
        value: 'Show all medals',
    });
};
