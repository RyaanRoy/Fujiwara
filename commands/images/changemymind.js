const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports.run = async (client, message, args) => {
	const notice3 = new Discord.MessageEmbed()
		.setDescription(
			"<:cross1:747728200691482746> **Please type the text you want to changemymind!**"
		)
		.setColor("RED");
	const mindtxt = args.slice(0).join(" ");
	if (!mindtxt) {
		return message.channel
			.send({embeds:[notice3]})
			.then(msg => msg.delete({ timeout: 10000 }));
	}

	const image = await canvacord.Canvas.changemymind(mindtxt);

	const triggered = new Discord.MessageAttachment(image, "changemymind.png");

	message.channel.send({files:[triggered]});
};

module.exports.help = {
	name: "changemymind",
	description: "Changemymind please.",
	usage: "f-changemymind <text>(optional)",
	accessableby: "Member",
	aliases: []
};
