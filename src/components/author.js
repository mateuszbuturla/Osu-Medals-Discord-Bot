const sendMessage = require('../utils/sendMessage');

module.exports = (message) => {
    sendMessage(
        message,
        'Osu medals bot author',
        'correct',
        'Author',
        null,
        [
            {
                name: 'Discord',
                value: 'Bucik689#5588',
            },
            {
                name: 'Email',
                value: 'bucik689@gmail.com',
            },
        ],
        null,
        'https://cdn.discordapp.com/avatars/355348267133042689/9a5f6e229cd3f342605150edb1920eb9.png?size=128',
    );
};
