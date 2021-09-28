module.exports.run = async (client, message, args) => {
	const queue = client.distube.getQueue(message);
	if (!message.member.voice.channel)
		return message.channel.send(
			`${client.emotes.error} | You must be in a voice channel!`
		);
	client.distube.resume(message);
	message.channel.send(
		`<:remVV:842648172659474434> | Resumed! Now playing:\n${queue.songs[0].name}`
	);
};

module.exports.help = {
	name: "resume",
	description: "This command is used for resuming music.",
	usage: "b-resume",
	accessableby: "Member",
	aliases: []
};
