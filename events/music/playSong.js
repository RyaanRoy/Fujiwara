const Discord = require("discord.js");
module.exports = async (client, message, queue, song) => {
	const Embed = new Discord.MessageEmbed()
    .setAuthor(``, client.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`${message.author.username} used Play command`)
    .setDescription(`| Playing \`${song.name}\` - \`${
		song.formattedDuration
	}\`\n${client.status(queue)}`) 
    .setColor(`YELLOW`)
    .setThumbnail(song.thumbnail);
	message.channel.send(Embed);
};
