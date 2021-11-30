const { DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
	if (!message.member.voice.channel)
		return message.channel.send(
			`${client.emotes.error} | You must be in a voice channel!`
		);
	if (!client.distube.isPlaying(message))
		return message.channel.send(
			`${client.emotes.error} | There is nothing playing!`
		);
	client.distube.stop(message);
	const stopembed = new Discord.MessageEmbed()
	.setAuthor(`Stop`, client.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`${message.author.username} used stop command`)
    .setDescription(`Stopped playing the Music! See you again next time!`) 
    .setColor(`YELLOW`)
    .setImage(`https://cdn.discordapp.com/attachments/864787560781971486/892643636183986176/chika-vibes-dance.gif`);
	message.channel.send(stopembed);
};

module.exports.help = {
	name: "stop",
	description: "This command is used for stopping music.",
	usage: "f-stop",
	accessableby: "Member",
	aliases: ["s", "dc", "fuckoff", "disconnect"]
};
