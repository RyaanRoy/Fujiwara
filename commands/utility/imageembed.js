const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	const shoutinfo = args.slice(1).join(" ");
	const shouttitle = args[0];

	const noPerms = new Discord.MessageEmbed()
		.setDescription(
			`:no_entry_sign: ${message.author.username}, Missing Permission!`
		)
		.setColor(0xff0000);

	const noPerms123 = new Discord.MessageEmbed()
		.setDescription(
			`:no_entry_sign: ${message.author.username}, Missing Link or Title!`
		)
		.setColor(0xff0000);

	if (!message.member.permissions.has("MANAGE_MESSAGES"))
		return message.channel.send({embeds:[noPerms]}).then(msg => msg.delete(5000));

	if (!shoutinfo) {
		message.delete();
		return message.channel.send({embeds:[noPerms123]});
	}

	if (!shouttitle) {
		message.delete();
		return message.channel.send({embeds:[noPerms123]});
	}

	const embed1 = new Discord.MessageEmbed()
		.setTitle(`${shouttitle}`)
		.setImage(`${shoutinfo}`)
		.setColor("GREEN");

	message.delete();
	message.channel.send({embeds:[embed1]});
};

module.exports.help = {
	name: "imageembed",
	description: "This command is used for embedding stuff in discord",
	usage: "f-imageembed <title> <link>",
	accessableby: "Member",
	aliases: []
};