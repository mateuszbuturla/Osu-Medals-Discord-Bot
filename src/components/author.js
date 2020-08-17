const sendMessage = require('../utils/sendMessage');

module.exports = (message) => {
    sendMessage(message, 'Osu medals bot author', 'correct', 'Author', null, [
        {
            name: 'Discord',
            value: 'Bucik689#5588',
        },
        {
            name: 'Email',
            value: 'bucik689@gmail.com',
        },
    ]);
};
