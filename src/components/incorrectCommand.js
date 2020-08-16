const sendMessage = require('../utils/sendMessage');

module.exports = (message) => {
    sendMessage(
        message,
        'Incorrect command',
        'error',
        'This command does not exist',
    );
};
