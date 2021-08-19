const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	if (message.author.id != process.env.OWNERID)
		return message.channel.send("Only my developer can use this command...");
	const msg = args.slice(0).join(" ");
	if (!msg) return message.reply("Send something!");
	message.delete();
	message.channel.send(msg);
};

module.exports.help = {
	name: "say",
	description: "N/A",
	usage: "b-say [Message]",
	accessableby: "Bot Owners",
	aliases: ["say"]
};
