const allMedals = require('./components/allMedals');

module.exports = (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'medals':
            allMedals(message);
            break;
        default:
            break;
    }
};
