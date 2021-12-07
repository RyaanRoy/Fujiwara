const Discord = require("discord.js");
const superagent = require("superagent");
const Anime_Images = require('anime-images-api')
const API = new Anime_Images()
module.exports.run = async (client, message, args) => {
	// eslinf-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

		let { image } = await API.sfw.punch()
				
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} punches ${member}`)
						.setColor('#cc338b')
						.setDescription(
							`${message.author.username} gets violent!`
						)
						.setImage(image);

						message.channel.send({embeds:[embed]});
				

	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "punch",
	description: "This command is used for punch.",
	usage: "f-punch <mentions>",
	accessableby: "Members",
	aliases: []
};
