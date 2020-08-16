const allMedals = require('./components/allMedals');
const incorrectCommand = require('./components/incorrectCommand');
const help = require('./components/help');
const author = require('./components/author');

module.exports = (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'medals':
            allMedals(message);
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
