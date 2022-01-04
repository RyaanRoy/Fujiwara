const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");
const malScraper = require('mal-scraper');
module.exports.run = async (client, message, args) => {
  const search = `${args}`;
  if(!search)
  return message.reply('Please add a search query if invalid command will not work.');

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.MessageEmbed()
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setDescription(data.synopsis)
      .setColor('#ffc1cc') //I personally use bubblegum pink!
      .addField('English Title', data.englishTitle, true)
      .addField('Japanese Title', data.japaneseTitle, true)
      .addField('Type', data.type, true)
      .addField('Episodes', data.episodes, true)
      .addField('Rating', data.rating, true)
      .addField('Aired', data.aired, true)
      .addField('Score', data.score, true)
      .addField('Score Stats', data.scoreStats, true)
      
      const row = new Discord.MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('MyAnimeListLink')
					.setStyle('PRIMARY')
          .setURL(`${data.url}`),
			);
      message.channel.send({ embeds: [malEmbed],components: [row] });

    })
      .catch((err) =>
        message.channel.send({embeds:[
          new MessageEmbed()
            .setDescription(
              `That anime isn't found!\n\n\`\`\`js\n${err}\n\`\`\``
            )
            .setColor("#cc338b")
        ]}
        )
      );
};

module.exports.help = {
	name: "anime",
	description:
		"Searching anime",
	usage: "f-anime <query>",
	accessableby: "Member",
	aliases: ["animesearch"]
};