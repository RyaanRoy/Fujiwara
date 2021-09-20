const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");
module.exports.run = async (client, message, args) => {
    const query = args.join(" ");
    if (!query) return message.lineReply("Please specify a query to search!");
    fetch(`https://api.jikan.moe/v3/search/anime?q=${query}`)
      .then((res) => res.json())
      .then((body) => {
        const title = body.results[0].title;
        const mal_url = body.results[0].url;
        const imgae = body.results[0].image_url;
        const synopsis = body.results[0].synopsis;
        const type = body.results[0].type;
        const episode = body.results[0].episodes;
        const score = body.results[0].score;
        const start_date = body.results[0].start_date;
        const rate = body.results[0].rated || "Unknown";

        const embed = new MessageEmbed()
          .setTitle(title)
          .setURL(mal_url)
          .setThumbnail(imgae)
          .setDescription(synopsis)
          .addField(`Type`, type)
          .addField(`Total Episode`, episode)
          .addField(`Ratings (at MyAnimeList)`, score)
          .addField(`Released`, moment(start_date).format("LLLL"))
          .addField(`Rate`, rate)
          .setColor(`#800080`)
          .setFooter(
            `Requested by : ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          );

        message.channel.send(embed);
      })
      .catch((err) =>
        message.channel.send(
          new MessageEmbed()
            .setDescription(
              `That anime isn't found!\n\n\`\`\`js\n${err}\n\`\`\``
            )
            .setColor("RED")
        )
      );
};

module.exports.help = {
	name: "anime",
	description:
		"Searching anime",
	usage: "b-anime <query>",
	accessableby: "Member",
	aliases: ["animesearch"]
};