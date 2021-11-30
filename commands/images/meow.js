const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
	// eslinf-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();
        const { body } = await superagent.get("https://nekos.life/api/v2/img/meow");
				
					const embed = new Discord.MessageEmbed()
						.setTitle(`Catz`)
						.setColor('#cc338b')
						.setDescription(
							`Yes Catz`
						)
						.setImage(body.url);

					message.channel.send(embed);
				
			
		
	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "meow",
	description: "This command is used for meow.",
	usage: "f-meow",
	accessableby: "Members",
	aliases: []
};
