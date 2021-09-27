const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	// eslinb-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

		require("request")(
			{ url: "https://nekos.life/api/v2/img/slap", json: true },
			(req, res, json) => {
				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} slaps ${member.user.username}`)
						.setColor("#363942")
						.setDescription(
							`${message.author.username} slapped ${member.user.username}!`
						)
						.setImage(json.url);

					message.channel.send(embed);
				} else message.reply("You need to mention the user to slap!");
			}
		);
	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "slap",
	description: "This command is used for generating pat.",
	usage: "b-slap <mentions>",
	accessableby: "Members",
	aliases: []
};
