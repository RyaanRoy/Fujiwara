const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
	msg.delete();
	msg.channel.send(
		"Please upvote here every 12 hours if possible >https://top.gg/bot/874922249411518484#/vote"
	);
};

module.exports.help = {
	name: "vote",
	description:
		"Vote us in https://top.gg/bot/874922249411518484#/vote every 12 hours",
	usage: "b-vote",
	accessableby: "Everyone",
	aliases: []
};
