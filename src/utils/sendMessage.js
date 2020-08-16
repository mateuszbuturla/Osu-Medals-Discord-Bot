const { MessageEmbed } = require('discord.js');

module.exports = (client, title, status, description, fields) => {
    const embed = new MessageEmbed()
        .setTitle(title)
        .setColor(status === 'correct' ? 0x32a852 : 0xdb1a1a)
        .setDescription(description)
        .addFields(fields !== undefined);
    client.channel.send(embed);
};
