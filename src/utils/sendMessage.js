const { MessageEmbed } = require('discord.js');

module.exports = (client, title, status, description, fields, reactions) => {
    const embed = new MessageEmbed()
        .setTitle(title)
        .setColor(status === 'correct' ? 0x32a852 : 0xdb1a1a)
        .setDescription(description)
        .addFields(fields);
    client.channel.send(embed).then((message) => {
        if (reactions !== undefined && reactions.length > 0) {
            reactions.map((reaction) => {
                message.react(reaction);
            });
        }
    });
};
