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
		`<a:yup:871815263153172550> | Skipped:${queue.songs[0].name}`
	);
};

module.exports.help = {
	name: "skip",
	description: "This command is used for skiping songs.",
	usage: "b-skip",
	accessableby: "Manage Server",
	aliases: []
};
