const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
	// eslinb-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

		const { body } = await superagent.get("https://nekos.life/api/v2/img/smug");
				
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} smirks`)
						.setColor('#cc338b')
						.setDescription(
							`${message.author.username} kinda sus!`
						)
						.setImage(body.url);

					message.channel.send(embed);
				

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
