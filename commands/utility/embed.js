const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const split = args.join(" ").split(";");
    const title = split[0];
    const description = split[1];
	const image = split[2];
	const embed50 = new Discord.MessageEmbed()
	.setTitle("Command: f-embed")
	.setDescription("Usage: f-embed [title], [description], [image link]")
	.setColor(0xff0000);
	if (!split){
	return message.channel.send(embed50);
	}
	const embed1 = new Discord.MessageEmbed()
		.setTitle(`${title}`)
		.setDescription(`${description}`)
		.setImage(image)
		.setFooter(`Actioned by : ${message.author.tag}`)
		.setColor("GREEN");
		

	message.delete();
	message.channel.send(embed1);
};

module.exports.help = {
	name: "embed",
	description: "This command is used for embedding stuff in discord",
	usage: "f-embed <title>;<desc>;<imageURL(optional)>",
	accessableby: "Member",
	aliases: ["ed"]
};
