const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
message.delete();
};

module.exports.help = {
	name: "delete",
	description: "N/A",
	usage: "b-delete",
	accessableby: "Bot Owners",
	aliases: []
};