const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
	const settings = require("../../config/settings.json");
	const prefixesdatabase = client.settings.ensure(message.guild.id, settings);

	const helpArray = message.content.split(" ");
	const helpArgs = helpArray.slice(1);

	if (!helpArgs[0]) {
		let embed = new Discord.MessageEmbed()
		.setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
		.setTitle(`> Help with commands`)
		.setDescription(
			`Yoo! **My prefix is:** \`${prefixesdatabase.prefix}\` \nClick [here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) to invite me to your server.\nTo chat with me simply mention or reply to me and ask a question.\n📱**Basic**: help, ping, uptime, vote\nTo report bugs, simply type ${prefixesdatabase.prefix}bugreport and describe the issue\nTo get more info about a command type ${prefixesdatabase.prefix}help <command>`
		)
		.addField(`> <a:duckdance:859068191871598592>   Support Server`, `To join the support server: [Invite to support server](https://discord.gg/qXDyWEesW6)`, false)
		.addField(`> <a:panic:856054789217583104>  Moderation`, `purge, ban, unban, warn, clearwarn, warnings, kick, createchannel, createemoji, lockchannel, unlockchannel, mute, unmute, rename, slowmode`, true)
		.addField(`> <:blurpleannouncements:859068819191496734> GiveAway`, `gstart , greroll, gend`, true)
		.addField(`> <a:purplestar:817788092768976896> Fun`, `8ball, ship, animesearch, aes256, deaes256, meme, sudo`, false)
		.addField(`> <a:dev:817788400471638016> Utility`, `enlarge, reminder, wikipedia, urban, roblox, serverinfo, serverav, avatar, whois, roleinfo, channel, embed(use ;), imageembed, reverse, setafk, snipe, stats, timer, translate, weather, youtube-search`, false)
		.addField(`> 🖼️ Image`, `captcha, circle, delete, think, gay, changemymind, trigger, clyde, petpet, magik, dog, cat, drake, rip, iphonex`, false)
		.addField(`> <a:chikadance:852764676429185035>  Games`, `akinator, youtubetogether, betrayal, trivia, calculator`, true)
		.addField(`> <:mm:848450657614037002>  Roleplay`, `kiss, hug, pat, poke, smug, tickle, slap, feed, cuddle, poke, meow, baka, waifu `, true)
		.addField(`> <a:disk:855561346087387136> Music`, `play, pause, stop, skip, queue, autoplay, loop, volume, resume, lyrics, filter, jumpto`, false)
		.setColor('#cc338b')
		.setImage(`https://i.pinimg.com/originals/b6/b4/de/b6b4ded4bd797b093cc9b68aa6fba694.gif`)
		.setFooter(`To set Custom prefix type: ${prefixesdatabase.prefix}setprefix`, client.user.displayAvatarURL())
		.setThumbnail(client.user.displayAvatarURL())
	
	
		message.channel.send(embed);
		
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
				.setDescription(`${emojis.cross} Command is not found!`)
				.setColor("RED");
 message.channel.send(embeds);
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