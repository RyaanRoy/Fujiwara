module.exports.run = async (client, message, args) => {
	if (!message.member.voice.channel)
		return message.channel.send(
			`${client.emotes.error} | You must be in a voice channel!`
		);
	if (!client.distube.isPlaying(message))
		return message.channel.send(
			`${client.emotes.error} | There is nothing playing!`
		);
	const queue = client.distube.skip(message);
	message.channel.send(
<<<<<<< Updated upstream
		`<:heh:844192752472555520> | Skipped:${queue.songs[0].name}`
=======
		`<:blurplecheck:859068688492527636> | Skipped:${queue.songs[0].name}`
>>>>>>> Stashed changes
	);
};

module.exports.help = {
	name: "skip",
	description: "This command is used for skiping songs.",
	usage: "b-skip",
	accessableby: "Manage Server",
	aliases: []
};
