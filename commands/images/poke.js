const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	// eslinb-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

		require("request")(
			{ url: "https://nekos.life/api/img/poke", json: true },
			(req, res, json) => {
				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} pokes ${member.user.username}`)
						.setColor("#363942")
						.setDescription(
							`${message.author.username} poked ${member.user.username}!`
						)
						.setImage(json.url);

					message.channel.send(embed);
				} else message.reply("You need to mention the user to poke!");
			}
		);
	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "poke",
	description: "This command is used for poking.",
	usage: "b-poke <mentions>",
	accessableby: "Members",
	aliases: []
};
