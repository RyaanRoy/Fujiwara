module.exports = async (client, message, queue, playlist) => {
	message.channel.send(
		`\`<:remVV:842648172659474434> \` | Added \`${playlist.name}\` playlist (${
			playlist.songs.length
		} songs) to queue\n${client.status(queue)}`
	);
};
