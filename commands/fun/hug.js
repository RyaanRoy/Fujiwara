const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const request = require("superagent");
module.exports.run = async (client, message, args) => {
    let ment = message.mentions.users.first();
    if (!ment) return message.channel.send("Please mention a user!");
    if (ment.id == message.author.id)
      return message.channel.send("How Is That Possible?");
    if (ment.id == bot.user.id && message.author.id == "788260234409672754")
      return message.channel.send("B-BAKA!");
    const { body } = await request.get("https://api.waifu.pics/sfw/hug");

    let e = new MessageEmbed()
      .setColor("#FFC0CB")
      .setTitle(`${message.author.username} Hugged ${ment.username}`)
      .setImage(body.url)
      .setFooter(
        `${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel.send({ embed: e });
};

module.exports.help = {
	name: "hug",
	description: "This command is used to hug someone",
	usage: "b-hug <mention>",
	accessableby: "Members",
	aliases: []
};