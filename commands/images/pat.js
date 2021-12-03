const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	// eslinf-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

		require("request")(
			{ url: "https://nekos.life/api/pat", json: true },
			(req, res, json) => {
				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} pats ${member.user.username}`)
						.setColor("#363942")
						.setDescription(
							`They deserved it!`
						)
						.setImage(json.url);

						message.channel.send({embeds:[embed]});
				} else message.reply("You need to mention the user to pat!");
			}
		);
	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "pat",
	description: "This command is used for generating pat.",
	usage: "f-pat <mentions>",
	accessableby: "Members",
	aliases: []
};
