const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports.run = async (client, message, args) => {
	const usernotfind = new Discord.MessageEmbed()
		.setDescription(`${emojis.cross} User is not founf-`)
		.setColor("RED");
	const target = message.mentions.users.first();
	const attachment = message.attachments.array()[0];

	let imagetarget;
	try {
		imagetarget =
			target ||
			(attachment
				? attachment.url
				: args[0]
				? args[0].length == 18
					? message.guild.members.cache.get(args[0]).user.displayAvatarURL({
							dynamic: true,
							format: "png",
							size: 4096
					  })
					: message.guild.members.cache
							.find(
								r =>
									r.user.username.toLowerCase() ===
									args.join(" ").toLocaleLowerCase()
							)
							.user.displayAvatarURL({
								dynamic: true,
								format: "png",
								size: 4096
							})
				: message.author.displayAvatarURL({
						dynamic: true,
						format: "png",
						size: 4096
				  }));
	} catch (e) {
		return message.channel.send({embeds:[usernotfind]});
	}

	const image = await canvacord.Canvas.rainbow(imagetarget);
	const rainbow = new Discord.MessageAttachment(image, "rainbow.png");
	return message.channel.send({files:[rainbow]});
};

module.exports.help = {
	name: "gay",
	description: "This command is used for making an image to be rainbow",
	usage: "f-gay <mentions or attachment>",
	accessableby: "Memeber",
	aliases: []
};
