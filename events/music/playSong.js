const Discord = require("discord.js");
const gifmusic="https://cdn.discordapp.com/attachments/850619329628471336/877233598057545749/image_processing20200131-9914-t3yrnb_1.gif";
module.exports = async (client, message, queue, song) => {
	const Embed = new Discord.MessageEmbed()
    .setAuthor(`<a:eq:859067700780859412> Now Playing`)
    .setTitle(`${song.name} - ${
        song.formattedDuration
    }`)
    .setDescription(`Requested by: ${song.user.tag}`) 
       .addField(`Options`,
            `${client.status(queue)}`
    )
    .setColor(`PINK`)
    .setThumbnail(`${song.thumbnail}`);
	message.channel.send(Embed);
};


