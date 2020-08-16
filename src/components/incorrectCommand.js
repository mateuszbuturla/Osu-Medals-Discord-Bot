const sendMessage = require('../utils/sendMessage');

module.exports = (message) => {
    sendMessage(
        message,
        'Incorrect command',
        'error',
        `This command does not exist. Type ${prefix}help to get all commands list.`,
    );
};
