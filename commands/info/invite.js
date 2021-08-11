const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const embed = new Discord.MessageEmbed()
		.setAuthor(`Invite Me to your server!`, client.user.displayAvatarURL())
		.setColor("#2A2A2A")
		.setDescription(
			`[Click Here (Recommended Permissions)](https://discord.com/api/oauth2/authorize?client_id=874922249411518484&permissions=261993004279&scope=bot)\n[Click Here (Administrator Permissions)](https://discord.com/api/oauth2/authorize?client_id=874922249411518484&permissions=8&scope=bot)`
		)
		.setFooter(`© ${nowyear} ${client.user.username}`);
	message.channel.send(embed);
};

module.exports.help = {
	name: "invite",
	description: "This command is used for creating invite links.",
	usage: "z!invite",
	accessableby: "Members",
	aliases: []
};
