const Discord = require("discord.js");

exports.run = (client, message, args) => {
	const notice3 = new Discord.MessageEmbed()
		.setDescription(
			`${emojis.cross} I don't have permission to manage channel!`
		)
		.setColor("RED");
	const dfgrdgdfgdf = new Discord.MessageEmbed()
		.setDescription(`${emojis.tick} Unlocked this channel`)
		.setColor("GREEN");

	if (!message.guild.member(client.user).permissions.has("MANAGE_CHANNELS")) {
		return message.channel
			.send({embeds:[notice3]})
			.then(msg => msg.delete({ timeout: 5000 }));
	}
	const mmqembed = new Discord.MessageEmbed()
		.setDescription(
			`${emojis.cross} ${message.author.username}, Missing Permission`
		)
		.setColor("RED");
	if (!message.member.permissions.has("MANAGE_CHANNELS")) {
		return message.channel
			.send({embeds:[mmqembed]})
			.then(msg => msg.delete({ timeout: 5000 }));
	}

	if (!client.lockit) client.lockit = [];

	message.channel
		.createOverwrite(message.guild.id, {
			SEND_MESSAGES: true
		})
		.then(() => {
			message.channel.send({embeds:[dfgrdgdfgdf]});
			delete client.lockit[message.channel.id];
		})
		.catch(error => {
			console.log(error);
		});
};

module.exports.help = {
	name: "unlockchannel",
	description: "This command is used for unlockchanneling",
	usage: "f-unlockchannel",
	accessableby: "Manage Channels",
	aliases: []
};
