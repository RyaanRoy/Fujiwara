const Discord = require("discord.js");
const request = require("request");
const { Client, Message, MessageEmbed } = require("discord.js");
const translate = require("@iamtraction/google-translate");
module.exports.run = async (client, message, args) => {
  const query = args.join(" ");
  if (!query) return message.lineReply("Please specify a text to translate!");

  const translated = await translate(query, { to: "en" });

  const embed = new MessageEmbed()
    .setAuthor(
      message.author.tag,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .addField("Query", query)
    .addField("Result", translated.text)
    .addField("Translated to", "English")
    .setColor("PINK")
    .setFooter(message.author.tag)
    .setTimestamp();
  message.lineReplyNoMention(embed);
};

module.exports.help = {
	name: "translate",
	description:
		"This command is used for translating stuff.",
	usage: "b-translate <text>",
	accessableby: "Member",
	aliases: ["tr"]
};
