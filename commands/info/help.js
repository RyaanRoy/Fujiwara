const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const settings = require("../../config/settings.json");
	const prefixesdatabase = client.settings.ensure(message.guild.id, settings);

	const helpArray = message.content.split(" ");
	const helpArgs = helpArray.slice(1);

	if (!helpArgs[0]) {
		const embed = new Discord.MessageEmbed()
			.setAuthor(
				`${client.user.username} Commands list`,
				client.user.displayAvatarURL()
			)
			.setColor("GREEN")
			.setDescription(
				`Yoo! **My prefix is:** \`${prefixesdatabase.prefix}\` \nClick [HERE](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) to invite me to your server.`
			)
			.setThumbnail("data:image/jpeg;base64,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")
			.addField("**📱Basic**", "`help`, `ping`, `uptime`, `vote`[please??]")
			.addField(
				"**⚙utility**",
				"`aes256`, `enlarge`, `reminder`, `wikipedia`, `urban`, `roblox`,`serverinfo`, `serverav`, `avatar`, `channel`, `embed`, `imageembed`, `roleinfo`, `reverse`, `setafk`, `snipe`, `stats`, `timer`, `translate`, `whois`, `weather`"
			)
			.addField(
				"**🎃Fun**",
				"`8ball`, `ship`, `animesearch`, `deaes256`, `kiss`, `meme`, `ngif`, `hug`, `pat`, `poke`, `smug`, `tickle`, `youtubetogether (ytt)`, `betrayal(btt)`"
			)
			.addField(
				"**:tada:Giveaways**",
				"`start-giveaway`, `reroll`, `end-giveaway`"
			)
			.addField(
				"**:frame_photo:Image**",
				"`captcha`, `circle`, `delete`, `think`, `gay`, `changemymind`, `trigger`, `clyde`, `petpet`, `magik`, `dog`, `cat`, `iphonex`, `drake`, `rip`"
			)
			.addField(
				"**:musical_note:Music**",
				"`play`, `stop`, `skip`, `queue`, `autoplay`, `loop`, `volume`, `pause`, `resume`, `filter`, `lyrics`, `jumpto`"
			)
			.addField(
				"**🛠️Moderation**",
				"`ban`, `clear`, `clearwarn`, `createchannel`, `createemoji`, `kick`, `lockchannel`, `mute`, `rename`, `slowmode`, `unban`, `unlockchannel`, `unmute`, `warn`, `warnings`"
			)
			
			.addField("**:gear:Custom Function**", "`setprefix`")
			.setImage(`https://c.tenor.com/dOjio6NWz8QAAAAC/chika-fujiwara-dance.gif`)
			.setFooter(
				`© ${nowyear} ${client.user.username} | This command requested by ${message.author.username}#${message.author.discriminator}`
			);
		
		message.channel.send({ embed });
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
