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
    .setImage(`https://tenor.com/view/chika-vibes-dance-chika-dance-gif-17080350`);
	message.channel.send(stopembed);
};

module.exports.help = {
	name: "stop",
	description: "This command is used for stopping music.",
	usage: "b-stop",
	accessableby: "Member",
	aliases: ["s", "dc", "fuckoff", "disconnect"]
};
