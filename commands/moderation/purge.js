const Discord = require("discord.js");
const config = require("../../config/config.json");
const settings = require("../../config/settings.json");

module.exports.run = async (client, message, args) => {
	const prefixesdatabase = client.settings.ensure(message.guild.id, settings);

	const embed6 = new Discord.MessageEmbed()
		.setDescription(
			`${emojis.cross} ${message.author.username}, Missing Permission`
		)
		.setColor("RED");
	const missingn = new Discord.MessageEmbed()
		.setDescription(
			`${emojis.cross} Use: **\`${prefixesdatabase.prefix}purge <1 - 100>\`**`
		)
		.setColor("RED");
	if (!message.member.permissions.has("MANAGE_MESSAGES")) {
		return message.channel.send({embeds:[embed6]}).then(m => m.delete({ timeout: 5000 }));
	}
	if (!args[0]) {
		return message.channel
			.send({embeds:[missingn]})
			.then(m => m.delete({ timeout: 7000 }));
	}

	const embedgg = new Discord.MessageEmbed()
		.setColor("RED")
		.setDescription(
			`${emojis.cross} You can only purge 1 - 100 message(s) each time!`
		);

	if (args[0] > 100 || args[0] <= 0)
		return message.channel.send({embeds:[embedgg]}).then(m => m.delete({ timeout: 5000 }));

	const embed = new Discord.MessageEmbed()
		.setColor("GREEN")
		.setTitle("Clear Action")
		.addField("User", `<@${message.author.id}> `)
		.addField("Cleared", `**${args[0]}**`)
		.addField("Channel", `${message.channel} | **${message.channel.name}**`);

	const kntlembed = new Discord.MessageEmbed()
		.setColor("GREEN")
		.setDescription(` Cleared **${args[0]}** Message here`);

	try {
		message.delete();
		message.channel.bulkDelete(args[0]).then(() => {
			message.channel.send({embeds:[kntlembed]}).then(m => m.delete({ timeout: 4000 }));
		});
	} catch (e) {
		const embedssss = new Discord.MessageEmbed()
			.setTitle("**Message Clearing**")
			.setDescription(`**Error:** \`\`\`${e}\`\`\``)
			.setColor("RED");

		message.delete();
		return message.channel
			.send({embeds:[embedssss]})
			.then(m => m.delete({ timeout: 7000 }));
	}
};

module.exports.help = {
	name: "purge",
	description: "Purge the chat",
	usage: "f-purge <amount>(1-99)",
	accessableby: "Manage Messages",
	aliases: []
};


