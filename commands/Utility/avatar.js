const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	const target = message.mentions.users.first();
	const imageitem =
		target ||
		(args[0]
			? args[0].length == 18
				? message.guild.members.cache.get(args[0]).user
				: message.author
			: message.author);

	const embed = new Discord.MessageEmbed()
		.setColor("#cc338b")
		.setTitle(`Avatar of ${message.mentions.users.first().username}`)
		.setImage(
			imageitem.displayAvatarURL({ dynamic: true, format: "jpg", size: 4096 })
		);

		message.channel.send({embeds:[embed]});
};

module.exports.help = {
	name: "avatar",
	description: "This command is used for showing your/other member's avatar.",
	usage: "f-avatar <mentions>(optional)",
	accessableby: "Member",
	aliases: ["av"]
};
