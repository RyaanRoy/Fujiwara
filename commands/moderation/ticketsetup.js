const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    const Message = args.slice(0).join(" ");
	if (!Message) return message.reply("Send something!");

    const channel = message.mentions.channels.first();
    if(!channel) return message.reply("Mention a channel!");
    ts.setup(Message,channel.id);

};

module.exports.help = {
	name: "ticketsetup",
	description: "This command is used for setting up ticket system.",
	usage: "f-ticketsetup <channelMention>",
	accessableby: "Member",
	aliases: ["ts"]
};
