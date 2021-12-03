const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {

	try {
		const member = message.mentions.members.first();

		
        const { body } = await superagent.get("https://nekos.life/api/v2/img/waifu");
				
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username}! A waifu for u!`)
						
						.setDescription(
							`${message.author.username} finds a waifu!`
						)
                        .setColor('#cc338b')
						.setImage(body.url);

						message.channel.send({embeds:[embed]});
				
			

	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "waifu",
	description: "This command is used for waifu hunting.",
	usage: "f-waifu",
	accessableby: "Members",
	aliases: []
};
