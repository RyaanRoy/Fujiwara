exports.run = async (client, message, args) => {
	const queue = client.distube.getQueue(message);
	if (!queue)
		return message.channel.send(
			`${client.emotes.error} | There is nothing playing!`
		);
	const q = queue.songs
		.map(
			(song, i) =>
				`${i === 0 ? "Now Playing:" : `[ ${i} ]`} *${song.name}* - \`[${
					song.formattedDuration
				}]\``
		)
		.join("\n");
		
		const Embed = new Discord.MessageEmbed()
    .setTitle(`Server Music Queue`)
    .setDescription(`${q}`)
    .setColor(`PINK`)
    .setImage(`https://cdn.discordapp.com/attachments/850619329628471336/897182687817764904/163f072171cd10a20e99bb35d4c7b278.gif`)
	message.channel.send(Embed);
};

module.exports.help = {
	name: "queue",
	description: "This command is used for fetching queue from music system.",
	usage: "b-queue",
	accessableby: "Members",
	aliases: []
};
