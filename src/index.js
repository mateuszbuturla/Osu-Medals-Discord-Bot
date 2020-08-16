require('dotenv').config();

const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();
const sendMessage = require('./utils/sendMessage');

const prefix = process.env.PREFIX;

global.bot = bot;
global.prefix = prefix;

bot.on('message', (message) => {
    if (message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'hw':
            sendMessage(message, 'Hello world', 'correct', 'hello world');
            break;
        default:
            break;
    }
});

bot.login(process.env.TOKEN);
