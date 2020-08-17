const sendMessage = require('../utils/sendMessage');

const medalsToShowOnOnePage = 5;

module.exports = (message) => {
    const allMedals = data.map((medal) => {
        return {
            name: medal.title,
            value: medal.description,
        };
    });

    let pages = allMedals.chunk_inefficient(5);
    let page = 1;

    const thenFunction = (msg, embed) => {
        msg.react('⏪');
        msg.react('⏩');

        const backwardsFilter = (reaction, user) =>
            reaction.emoji.name === '⏪' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) =>
            reaction.emoji.name === '⏩' && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, {
            time: 60000,
        });
        const forwards = msg.createReactionCollector(forwardsFilter, {
            time: 60000,
        });

        backwards.on('collect', (r, u) => {
            r.users.remove(
                r.users.cache.filter((u) => u === message.author).first(),
            );
            if (page === 1) return;
            page--;
            embed.fields = pages[page - 1];
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed);
        });

        forwards.on('collect', (r, u) => {
            r.users.remove(
                r.users.cache.filter((u) => u === message.author).first(),
            );
            if (page === pages.length) return;
            page++;
            embed.fields = pages[page - 1];
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed);
        });
    };

    sendMessage(
        message,
        'All medals',
        'correct',
        'All medals in Osu standard mode',
        `Page ${page} of ${pages.length}`,
        pages[page - 1],
        thenFunction,
    );
};
