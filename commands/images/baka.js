const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	// eslinb-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

		require("request")(
			{ url: "https://nekos.life/api/img/baka", json: true },
			(req, res, json) => {
				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} is irritated`)
						.setColor("#363942")
						.setDescription(
							`${message.author.username} calls you a baka!`
						)
						.setImage(json.url);

					message.channel.send(embed);
				}
			}
		);
	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "baka",
	description: "This command is used for generating pat.",
	usage: "b-baka <mentions>",
	accessableby: "Members",
	aliases: []
};
