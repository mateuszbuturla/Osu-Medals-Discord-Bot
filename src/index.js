require('dotenv').config();

const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();

const prefix = process.env.PREFIX;

global.bot = bot;
global.prefix = prefix;

bot.on('message', (message) => {
    if (message.content === `${prefix}hw`) {
        const embed = new MessageEmbed()
        .setTitle('Hello world')
        .setColor(0x32a852)
        .setDescription('Hello world');
        message.channel.send(embed);
    }

})

bot.login(process.env.TOKEN);