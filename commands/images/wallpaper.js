const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
	// eslinb-disable-line no-unused-vars
	try {
		

		const { body } = await superagent.get("https://nekos.life/api/v2//img/wallpaper");
			
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} fetches a wallpaper`)
						.setColor('#cc338b')
						.setDescription(
							`Cool Wallpaper Here`
						)
						.setImage(body.url);

					message.channel.send(embed);
				

	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "wallpaper",
	description: "This command is used for getting wallpapers.",
	usage: "b-wallpaper",
	accessableby: "Members",
	aliases: []
};
