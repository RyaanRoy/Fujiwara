const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const split = args.join(" ").split("|");
    const title = split[0];
    const description = split[1];
	const image = split[2];
	const embed50 = new Discord.MessageEmbed()
	.setTitle("Command: b-embed")
	.setDescription("Usage: b-embed [title], [description], [image link]")
	.setColor(0xff0000);
	if (!split){
	return message.channel.send(embed50);
	}
	const embed1 = new Discord.MessageEmbed()
		.setTitle(`${title}`)
		.setDescription(`${description}`)
		.setImage(image)
		.setColor("GREEN");
		

	message.delete();
	message.channel.send(embed1);
};

module.exports.help = {
	name: "embed",
	description: "This command is used for embedding stuff in discord",
	usage: "b-embed <title> <desc>",
	accessableby: "Member",
	aliases: []
};
