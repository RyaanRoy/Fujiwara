const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
module.exports.run = async (client, message, args) => {
    const query = args.join(" ");
    if (!query) return message.channel.send("Please specify a query to search!");
    const body = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        query
      )}`
    ).then((res) => res.json().catch(() => {}));
    if (!body) return message.channel.send("Page not found :x:");
    if (body.title && body.title === "Not found.")
      return message.channel.send("Error! Page Not Found... :x:");

    const embed = new Discord.MessageEmbed()
      .setTitle(`🌐 ${body.title}`)
      .addField(
        "More Info:",
        `**[Click Here](${body.content_urls.desktop.page})**`,
        true
      )
      .setDescription(`** ${body.extract} **`)
      .setFooter(
        `Wikipedia Search | Command Request by ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setColor("BLUE");

    if (body.thumbnail) embed.setThumbnail(body.thumbnail.source);
    message.channel.send(embed);
};

module.exports.help = {
	name: "wiki",
	description: "Search WIkipedia",
	usage: "b-wiki <query>",
	accessableby: "Members",
	aliases: ["wikipedia"]
};