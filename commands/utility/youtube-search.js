const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const ytsr = require("ytsr");
module.exports.run = async (client, message, args) => {
    const query = args.join(" ");
    if (!query)
      return message.reply("Provide a search for me to search YouTube!");

    const res = await ytsr(query).catch((e) =>
      message.replyNoMention(`No results found for ${query}`)
    );
    const video = res.items.filter((i) => i.type === "video")[0];
    const embed = new MessageEmbed()
      .setTitle(video.title)
      .setURL(video.url)
      .setImage(video.url)
      .setDescription(video.description ? !video.description : "No Description")
      .addField(
        `**Video Information**`,
        `**Creator**: [${video.author.name}](${video.author.url}) ${
          video.author.verified ? ":white_check_mark: (Verified)" : "\u200b"
        }
**Length**: ${video.duration} minute(s)
**Uploaded**: ${video.uploadedAt}
**Views**: ${video.views.toLocaleString()}`
      )
      .setThumbnail(video.author.bestAvatar.url);
    message.reply({embeds:[embed]});
};

module.exports.help = {
	name: "youtube-search",
	description: "Search Youtube",
	usage: "f-youtube-search <query>",
	accessableby: "Members",
	aliases: ["yts"]
};