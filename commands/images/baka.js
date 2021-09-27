const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
	// eslinb-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

		const { body } = await superagent.get("https://nekos.life/api/v2/img/baka");
				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} is irritated`)
						.setColor('#cc338b')
						.setDescription(
							`${message.author.username} calls ${member.user.username} a baka!`
						)
						.setImage(body.url);

					message.channel.send(embed);
				}

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
