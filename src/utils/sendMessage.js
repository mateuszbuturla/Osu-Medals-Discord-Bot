const { MessageEmbed } = require('discord.js');

module.exports = (
    client,
    title,
    status,
    description,
    footer,
    fields,
    thenFunction,
) => {
    const embed = new MessageEmbed();
    if (title) embed.title = title;
    if (status) embed.color = status === 'correct' ? 0x32a852 : 0xdb1a1a;
    if (description) embed.description = description;
    if (footer) embed.footer = footer;
    if (fields) embed.fields = fields;

    client.channel.send(embed).then((msg) => {
        if (thenFunction !== undefined) {
            thenFunction(msg, embed);
        }
    });
};
