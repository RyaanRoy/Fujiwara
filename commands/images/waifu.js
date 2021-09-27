const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	// eslinb-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

		require("request")(
			{ url: "https://nekos.life/api/waifu", json: true },
			(req, res, json) => {
				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} waifu for u`)
						.setColor("#363942")
						.setDescription(
							`${message.author.username} finds a waifu!`
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
	name: "waifu",
	description: "This command is used for waifu hunting.",
	usage: "b-waifu",
	accessableby: "Members",
	aliases: []
};
