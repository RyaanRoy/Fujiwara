const Discord = require("discord.js");
const superagent = require("superagent");
const API = require('anime-images-api')
const images_api = new API() 
module.exports.run = async (client, message, args) => {
	// eslinf-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

		images_api.sfw.kill().then(response => {
				
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} kills ${member.user.username}`)
						.setColor('#cc338b')
						.setDescription(
							`${message.author.username} decides to murder ${member.user.username}!`
						)
						.setImage(response.image);

						message.channel.send({embeds:[embed]});
				
                        })
	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "kill",
	description: "This command is used for kill.",
	usage: "f-kill <mentions>",
	accessableby: "Members",
	aliases: []
};
