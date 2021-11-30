const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
	// eslinf-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();
        const { body } = await superagent.get("https://nekos.life/api/v2/img/feed");
				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} feeds ${member.user.username}`)
						.setColor('#cc338b')
						.setDescription(
							`${message.author.username} fed ${member.user.username}!`
						)
						.setImage(body.url);

					message.channel.send(embed);
				} else message.reply("You need to mention the user to feed");

	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "feed",
	description: "This command is used for generating pat.",
	usage: "f-feed <mentions>",
	accessableby: "Members",
	aliases: []
};
