const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	// eslinb-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

		require("request")(
			{ url: "https://nekos.life/api/smug", json: true },
			(req, res, json) => {
				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} smirks`)
						.setColor('#cc338b')
						.setDescription(
							`${message.author.username} kinda sus!`
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
	name: "smug",
	description: "This command is used for generating pat.",
	usage: "b-smug <mentions>",
	accessableby: "Members",
	aliases: []
};
