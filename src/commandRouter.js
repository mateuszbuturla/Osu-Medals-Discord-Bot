const allMedals = require('./components/allMedals');
const medal = require('./components/medal');
const help = require('./components/help');
const author = require('./components/author');
const incorrectCommand = require('./components/incorrectCommand');

module.exports = (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'medals':
            allMedals(message);
            break;
        case 'medal':
            medal(message, args);
            break;
        case 'help':
            help(message);
            break;
        case 'author':
            author(message);
            break;
        default:
            incorrectCommand(message);
            break;
    }
};
