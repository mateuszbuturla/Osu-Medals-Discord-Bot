require('dotenv').config();

const { Client } = require('discord.js');
const bot = new Client();
const mongoose = require('mongoose');
const commandRouter = require('./commandRouter');
const prototypes = require('./utils/prototypes');
const { getAllMedals } = require('./controllers/medalController');

//Login to database

mongoose.connect(process.env.DB_KEY, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the database');
    getAllMedals();
});
db.on('error', (err) => console.log('Error ' + err));

//End login to database

prototypes();

const prefix = process.env.PREFIX;

global.bot = bot;
global.prefix = prefix;

bot.on('ready', () => {
    bot.user.setActivity(`${prefix}help`, { type: 'PLAYING' });
});

bot.on('message', (message) => {
    if (message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;

    commandRouter(message);
});

bot.login(process.env.TOKEN);
