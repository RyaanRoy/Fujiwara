const Discord = require("discord.js");

module.exports.run = (client, message, args) => {


	const embed = new Discord.MessageEmbed()
		.setColor("GREEN")
		.setTitle(`${message.author.username} is thinking of ${message.mentions.users.first().username}:`)
		.setImage("https://cdn.discordapp.com/attachments/850619329628471336/877193191336579122/ezgif-3-a88d072ee22a.gif");

		message.channel.send({embeds:[embed]});
};

module.exports.help = {
	name: "think",
	description: "This command is used thinking gif.",
	usage: "f-think <mentions>",
	accessableby: "Member",
	aliases: ["th"]
};