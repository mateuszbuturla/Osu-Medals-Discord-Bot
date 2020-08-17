const { MessageEmbed } = require('discord.js');

module.exports = (client, title, status, description, fields, thenFunction) => {
    const embed = new MessageEmbed()
        .setTitle(title)
        .setColor(status === 'correct' ? 0x32a852 : 0xdb1a1a)
        .setDescription(description)
        .addFields(fields);
    client.channel.send(embed).then((msg) => {
        if (thenFunction !== undefined) {
            thenFunction(msg, embed);
        }
    });
};
