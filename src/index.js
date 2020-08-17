require('dotenv').config();

const { Client } = require('discord.js');
const bot = new Client();
const commandRouter = require('./commandRouter');
const prototypes = require('./utils/prototypes');
const { getAllMedals } = require('./controllers/modelController');

prototypes();
getAllMedals();

const prefix = process.env.PREFIX;

global.bot = bot;
global.prefix = prefix;

bot.on('message', (message) => {
    if (message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;

    commandRouter(message);
});

bot.login(process.env.TOKEN);
