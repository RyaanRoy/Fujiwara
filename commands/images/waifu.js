const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
	// eslinb-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

        const { body } = await superagent.get("https://nekos.life/api/v2/img/waifu");
				
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username}! A waifu for u!`)
						.setColor("#363942")
						.setDescription(
							`${message.author.username} finds a waifu!`
						)
						.setImage(body.url);

					message.channel.send(embed);
				
			

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
