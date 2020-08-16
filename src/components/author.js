const sendMessage = require('../utils/sendMessage');

module.exports = (message) => {
    sendMessage(message, 'Osu medals bot author', 'correct', 'Author', {
        name: 'Discord',
        value: 'Bucik689#5588',
    });
};
