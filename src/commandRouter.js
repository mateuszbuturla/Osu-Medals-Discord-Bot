const allMedals = require('./components/allMedals');
const incorrectCommand = require('./components/incorrectCommand');

module.exports = (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'medals':
            allMedals(message);
            break;
        default:
            incorrectCommand(message);
            break;
    }
};
