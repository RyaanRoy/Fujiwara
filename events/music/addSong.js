module.exports = async (client, message, queue, song) => {
	const Embed = new Discord.MessageEmbed()
    .setAuthor(`New Song Added`, gifmusic)
    .setTitle(`Queue Updated`)
    .setDescription(`| Added ${song.name} - \`${song.formattedDuration}\` to the queue`) 
    .setColor(`YELLOW`)
    .setThumbnail(`${song.thumbnail}`);
	message.channel.send(Embed);
};
	

