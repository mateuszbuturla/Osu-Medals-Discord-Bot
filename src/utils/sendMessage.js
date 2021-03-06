const { MessageEmbed } = require('discord.js');

module.exports = (
    client,
    title,
    status,
    description,
    footer,
    fields,
    thenFunction,
    imageUrl,
) => {
    const embed = new MessageEmbed();
    if (title) embed.title = title;
    if (status) embed.color = status === 'correct' ? 0x32a852 : 0xdb1a1a;
    if (description) embed.description = description;
    if (footer) embed.setFooter(footer);
    if (fields) embed.fields = fields;
    if (imageUrl) embed.setThumbnail(imageUrl);

    client.channel.send(embed).then((msg) => {
        if (thenFunction) {
            thenFunction(msg, embed);
        }
    });
};
