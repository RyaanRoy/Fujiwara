const Discord = require("discord.js");
const [ CModeration, CFun, CGiveaway, CUtility, CImage, CMusic, CGames, CRp ] = require('../info/allcommands');
module.exports.run = async (client, message, args) => {
	const settings = require("../../config/settings.json");
	const prefixesdatabase = client.settings.ensure(message.guild.id, settings);

	const helpArray = message.content.split(" ");
	const helpArgs = helpArray.slice(1);

	if (!helpArgs[0]) {
		let embed = new Discord.MessageEmbed()
		.setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
		.setTitle(`> Help commands`)
		.setDescription(
			`Yoo! **My prefix is:** \`${prefixesdatabase.prefix}\` \nClick [HERE](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) to invite me to your server.\nTo chat with me simply mention or reply to me and ask a question.\n📱Basic: help, ping, uptime, vote`
		)
		.addField(`> <a:purplestar:817788092768976896> Moderation`, `${CModeration}`, true)
		.addField(`> <a:purplestar:817788092768976896> Fun`, `${CFun} \r`, true)
		.addField(`> <:blurpleannouncements:859068819191496734> GiveAway`, `${CGiveaway} \r`, false)
		.addField(`> <a:dev:817788400471638016> Utility`, `${CUtility} \r`, false)
		.addField(`> 🖼️ Image`, `${CImage} \r`, false)
		.addField(`> <a:chikadance:852764676429185035>  Games`, `${CGames} \r`, false)
		.addField(`> <:mm:848450657614037002>  Roleplay`, `${CRp} \r`, false)
		.addField(`> <a:disk:855561346087387136> Music`, `${CMusic} \r`, false)
		.setColor('#cc338b')
		.setImage(`https://steamuserimages-a.akamaihd.net/ugc/812248528035547228/3D07E3596FAF1F8185765C59C99D560EA5F4960E/?imw=512&imh=287&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true`)
		.setFooter(`To set Custom prefix type: ${prefixesdatabase.prefix}setprefix`, client.user.displayAvatarURL())
		.setThumbnail(client.user.displayAvatarURL())
	
	
	
		message.channel.send(embed)
	}

	if (helpArgs[0]) {
		let command = helpArgs[0];

		if (client.commands.has(command)) {
			command = client.commands.get(command);
			let alia = command.help.aliases;
			if (command.help.aliases < 1) alia = "No aliases";

			const embed = new Discord.MessageEmbed()
				.setAuthor(
					`Command: ${command.help.name}`,
					client.user.displayAvatarURL()
				)
				.setDescription(
					`
            **Description:**\n\`\`\`${
							command.help.description ||
							"There is no Description for this command."
						}\`\`\`\n**Usage:**\n\`\`\`${
						command.help.usage || "No Usage"
					}\`\`\`\n**Permissions:**\n\`\`\`${
						command.help.accessableby || "Members"
					}\`\`\`\n**Aliases:**\n\`\`\`${alia}\`\`\``
				)
				.setColor("#4a4b4d")
				.setFooter(
					`© ${nowyear} ${client.user.username} | This command requested by ${message.author.username}#${message.author.discriminator}`
				);

			message.channel.send(embed);
		} else {
			const embeds = new Discord.MessageEmbed()
				.setDescription(`${emojis.cross} Command is not founb-`)
				.setColor("RED");

			return message.channel.send(embeds);
		}
	}
};

module.exports.help = {
	name: "help",
	description: "This command is used for displaying all commands.",
	usage: "b-help",
	accessableby: "Members",
	aliases: []
};
