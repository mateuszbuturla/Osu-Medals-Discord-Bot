const sendMessage = require('../utils/sendMessage');
const medal = require('./medal');

const medalsToShowOnOnePage = 10;

module.exports = (message) => {
    const allMedals = data.map((medal) => {
        return {
            name: medal.title,
            value: medal.description,
            category: medal.category,
        };
    });
    let page = 1;

    const pages = allMedals
        .chunk_inefficient(medalsToShowOnOnePage)
        .map((simplePage) => {
            const toReturn = [];
            if (
                simplePage.filter(
                    (simpleMedal) => simpleMedal.category === 'Skill',
                ).length > 0
            ) {
                toReturn.push({
                    name: 'Skill',
                    value: simplePage
                        .filter(
                            (simpleMedal) => simpleMedal.category === 'Skill',
                        )
                        .map((simpleMedal) => simpleMedal.name)
                        .join(' \n '),
                });
            }
            if (
                simplePage.filter(
                    (simpleMedal) => simpleMedal.category === 'Dedication',
                ).length > 0
            ) {
                toReturn.push({
                    name: 'Dedication',
                    value: simplePage
                        .filter(
                            (simpleMedal) =>
                                simpleMedal.category === 'Dedication',
                        )
                        .map((simpleMedal) => simpleMedal.name)
                        .join(' \n '),
                });
            }
            if (
                simplePage.filter(
                    (simpleMedal) => simpleMedal.category === 'Beatmap Packs',
                ).length > 0
            ) {
                toReturn.push({
                    name: 'Beatmap Packs',
                    value: simplePage
                        .filter(
                            (simpleMedal) =>
                                simpleMedal.category === 'Beatmap Packs',
                        )
                        .map((simpleMedal) => simpleMedal.name)
                        .join(' \n '),
                });
            }
            if (
                simplePage.filter(
                    (simpleMedal) =>
                        simpleMedal.category === 'Mod Introduction',
                ).length > 0
            ) {
                toReturn.push({
                    name: 'Mod Introduction',
                    value: simplePage
                        .filter(
                            (simpleMedal) =>
                                simpleMedal.category === 'Mod Introduction',
                        )
                        .map((simpleMedal) => simpleMedal.name)
                        .join(' \n '),
                });
            }
            if (
                simplePage.filter(
                    (simpleMedal) =>
                        simpleMedal.category === 'Beatmap Spotlights',
                ).length > 0
            ) {
                toReturn.push({
                    name: 'Beatmap Spotlights',
                    value: simplePage
                        .filter(
                            (simpleMedal) =>
                                simpleMedal.category === 'Beatmap Spotlights',
                        )
                        .map((simpleMedal) => simpleMedal.name)
                        .join(' \n '),
                });
            }
            if (
                simplePage.filter(
                    (simpleMedal) =>
                        simpleMedal.category === 'Seasonal Spotlights',
                ).length > 0
            ) {
                toReturn.push({
                    name: 'Seasonal Spotlights',
                    value: simplePage
                        .filter(
                            (simpleMedal) =>
                                simpleMedal.category === 'Seasonal Spotlights',
                        )
                        .map((simpleMedal) => simpleMedal.name)
                        .join(' \n '),
                });
            }
            if (
                simplePage.filter(
                    (simpleMedal) => simpleMedal.category === 'Hush-Hush',
                ).length > 0
            ) {
                toReturn.push({
                    name: 'Hush-Hush',
                    value: simplePage
                        .filter(
                            (simpleMedal) =>
                                simpleMedal.category === 'Hush-Hush',
                        )
                        .map((simpleMedal) => simpleMedal.name)
                        .join(' \n '),
                });
            }
            return toReturn;
        });

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
        'All medals in Osu',
        `Page ${page} of ${pages.length}`,
        pages[page - 1],
        thenFunction,
    );
};
