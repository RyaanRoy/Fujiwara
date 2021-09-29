exports.run = async (client, message, args) => {
	const queue = client.distube.getQueue(message);
	if (!queue)
		return message.channel.send(
			`${client.emotes.error} | There is nothing playing!`
		);
	const q = queue.songs
		.map(
			(song, i) =>
				`${i === 0 ? "Now Playing:" : `${i}.`} ${song.name} - \`${
					song.formattedDuration
				}\``
		)
		.join("\n");
	message.channel.send(`<a:disk:855561346087387136>  | **Server Queue**\n${q}`);
};

module.exports.help = {
	name: "queue",
	description: "This command is used for fetching queue from music system.",
	usage: "b-queue",
	accessableby: "Members",
	aliases: []
};
