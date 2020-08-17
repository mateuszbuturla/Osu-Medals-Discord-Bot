require('dotenv').config();

const { Client } = require('discord.js');
const bot = new Client();
const data = require('./data/data');
const commandRouter = require('./commandRouter');
const prototypes = require('./utils/prototypes');
prototypes();

const prefix = process.env.PREFIX;

global.bot = bot;
global.prefix = prefix;
global.data = data;

bot.on('message', (message) => {
    if (message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;

    commandRouter(message);
});

bot.login(process.env.TOKEN);
