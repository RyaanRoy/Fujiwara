const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
	
	try {
		const member = message.mentions.members.first();
        const { body } = await superagent.get("https://nekos.life/api/v2/img/cuddle");

				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} cuddles ${member.user.username}`)
						.setColor('#cc338b')
						.setDescription(
							`SHOO CUTE!`
						)
						.setImage(body.url);

						message.channel.send({embeds:[embed]});
				} else message.reply("You need to mention the user to cuddle");

	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "cuddle",
	description: "This command is used for cuddling.",
	usage: "f-cuddle <mentions>",
	accessableby: "Members",
	aliases: []
};
