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
				`Yoo! **My prefix is:** \`${prefixesdatabase.prefix}\` \nClick [HERE](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) to invite me to your server.\nTo chat with me simply mention or reply to me and ask a question.`
			)
			.setThumbnail("https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg")
			.addField("**📱Basic**", "`help`, `ping`, `uptime`, `vote`[please??]")
			.addField(
				"**⚙utility**",
				"`aes256`, `enlarge`, `reminder`, `wikipedia`, `urban`, `roblox`,`serverinfo`, `serverav`, `avatar`, `channel`, `embed`, `imageembed`, `roleinfo`, `reverse`, `setafk`, `snipe`, `stats`, `timer`, `translate`, `whois`, `weather`"
			)
			.addField(
				"**🎃Fun**",
				"`8ball`, `akinator(do not reply to the embed as it will trigger chatbot)`, `ship`, `animesearch`, `trivia`, `deaes256`, `kiss`, `meme`, `ngif`, `hug`, `pat`, `poke`, `smug`, `tickle`, `youtubetogether (ytt)`, `betrayal(btt)`"
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
