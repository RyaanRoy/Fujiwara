module.exports = async (client, message, queue, song) => {
	message.channel.send(
		`Added ${song.name} - \`${song.formattedDuration}\` to the queue`
	);
};
