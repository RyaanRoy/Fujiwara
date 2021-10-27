const Discord=require(`discord.js`)
const Util=require(`discord.js`)
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
		const queueEmbed = new Discord.MessageEmbed()
.setTitle(`Server Music Queue`)
.setDescription(`${q}`)
.setColor(`#cc338b`)
.addField(`> <:5618like:865325952866058240> **Likes**`, `**${queue.songs[0].likes}**`, true)
.addField(`> <:dislike:865325952811401276> **Dislikes**`, `**${queue.songs[0].dislikes}**`, true)
.addField(`> <:blurplevoicechannel:859069048963727362> **Songs in Total:**`, `**${queue.songs.length}**`, true)

const splitDescription = Util.splitMessage(q, {
	maxLength: 4096,
	char: "\n",
	prepend: "",
	append: ""
  });
  splitDescription.forEach(async (m) => {

	queueEmbed.setDescription(m);
	
	message.channel.send(queueEmbed);
  });
};

module.exports.help = {
	name: "queue",
	description: "This command is used for fetching queue from music system.",
	usage: "b-queue",
	accessableby: "Members",
	aliases: []
};
