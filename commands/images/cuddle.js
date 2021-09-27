const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
	// eslinb-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();
        const { body } = await superagent.get("https://nekos.life/api/v2/img/cuddle");

				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} cuddle ${member.user.username}`)
						.setColor('#cc338b')
						.setDescription(
							`${message.author.username} cuddled ${member.user.username}!`
						)
						.setImage(body.url);

					message.channel.send(embed);
				} else message.reply("You need to mention the user to cuddle");

	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "cuddle",
	description: "This command is used for cuddling.",
	usage: "b-cuddle <mentions>",
	accessableby: "Members",
	aliases: []
};
