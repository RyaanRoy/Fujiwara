const { Client, Message, MessageEmbed } = require("discord.js");
const akinator = require("discord.js-akinator");

module.exports.run = async (client, message, args) => {
    message.channel.startTyping();
    akinator(message, client);
    message.channel.stopTyping();
  };


module.exports.help = {
	name: "akinator",
	description:
		"PLaying akinator on discord",
	usage: "f-akinator",
	accessableby: "Member",
	aliases: ["aki"]
};