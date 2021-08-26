module.exports = async (client, message, queue, song) => {
	if (message.member.voice.channel!==client.voice.channel){
	return message.channel.send(
		`${client.emotes.error} | You must be in same voice channel as Bumblebee`
	);
	}
	message.channel.send(
		`Added ${song.name} - \`${song.formattedDuration}\` to the queue`
	);
};
