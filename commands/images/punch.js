const Discord = require("discord.js");
const superagent = require("superagent");
const API = require('anime-images-api')
const images_api = new API() 
module.exports.run = async (client, message, args) => {
	
	try {
		const member = message.mentions.members.first();

        images_api.sfw.punch().then(response => {
				
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} punches ${member}`)
						.setColor('#cc338b')
						.setDescription(
							`${message.author.username} gets violent!`
						)
						.setImage(response.image);

						message.channel.send({embeds:[embed]});
                        })
				

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
