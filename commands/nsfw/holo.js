const discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = (client, msg, args) => {
	if (msg.channel.nsfw === true) {
		superagent
			.get("https://nekobot.xyz/api/image")
			.query({ type: "holo" })
			.end((err, response, body) => {
				const emb = new discord.MessageEmbed()
					.setImage(response.body.message)
					.setColor("#00ff00")
					.setTitle("Holo here")
					.setFooter(
						`©2021 Swaggy | This command requested by ${msg.author.username}#${msg.author.discriminator}`
					);

				msg.channel.send(emb);
			});
	} else {
		msg.channel.send("This isn't NSFW channel!");
	}
};

module.exports.help = {
	name: "holo",
	description:
		"This command is used for calling NSFW images API to send them, but NSFW channel needed.",
	usage: "d!holo",
	accessablechannel: "NSFW Channel",
	accessableby: "NSFW/Member",
	aliases: []
};
